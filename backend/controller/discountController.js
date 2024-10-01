const { Op } = require("sequelize");
const Discount = require("../models/discount"); // Adjust the path as necessary
const Coupon = require("../models/coupons"); // Adjust the path as necessary

module.exports = {
  // List all Discounts
  list: async function (req, res, next) {
    try {
      const searchQuery = {};
      if (req.query.from) {
        const currentTime = new Date();
        searchQuery.start = {
          [Op.gte]: new Date(req.query.from),
          [Op.lt]: currentTime,
        };
      }

      const discounts = await Discount.findAll({
        where: searchQuery,
        order: [["start", "DESC"]],
      });

      return res.json(discounts);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  // Show a Discount
  read: async function (req, res, next) {
    try {
      const discount = await Discount.findByPk(req.params.id);
      if (!discount) {
        return res.status(404).json("Discount not found");
      }
      return res.json(discount);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  // Create new Discount
  create: async function (req, res, next) {
    try {
      const couponCode = req.body.code || "";
      const coupon = await Coupon.findOne({
        where: { code: couponCode.toUpperCase() },
      });

      if (!coupon) {
        return res
          .status(404)
          .json(`Coupon ‘${couponCode.toUpperCase()}’ not found`);
      }

      // Create or update Discount object
      const discountData = {
        ...req.body,
        couponId: coupon.id, // Assuming coupon.id is the foreign key
      };

      const [discount, created] = await Discount.upsert(discountData, {
        where: { code: req.body.code, user: req.body.user },
      });

      if (created) {
        console.log(
          "Applied discount %s to user %s.",
          req.body.code,
          req.body.user
        );
      }

      return res.json(discount);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  // Update a Discount
  update: async function (req, res, next) {
    try {
      const [numberAffected] = await Discount.update(req.body, {
        where: { id: req.params.id },
      });
      if (numberAffected === 0) {
        return res.status(404).json("Discount not found");
      }
      return res.status(200).json(`Updated discount ${req.params.id}`);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Delete a Discount
  delete: async function (req, res, next) {
    try {
      const searchParams = req.params.id === "ALL" ? {} : { id: req.params.id };
      const numberAffected = await Discount.destroy({ where: searchParams });

      return res.status(200).json(`Deleted ${numberAffected} discounts`);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
