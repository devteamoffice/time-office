const _ = require("lodash");
const md5 = require("md5");
const { Coupon } = require("../models/coupons"); // Adjust the path to your Sequelize models

const cleanUpCoupon = (coupon) => {
  // Remove unnecessary Sequelize metadata
  const cleanCoupon = coupon.toJSON();
  delete cleanCoupon.id; // Remove Sequelize `id` (if used)
  cleanCoupon.id = cleanCoupon.code; // To mirror Stripe API, assign code to id
  return cleanCoupon;
};

module.exports = {
  // List all Coupons
  list: async function (req, res) {
    try {
      const coupons = await Coupon.findAll({
        order: [["code", "ASC"]],
      });
      const cleanedCoupons = coupons.map(cleanUpCoupon);
      return res.json(cleanedCoupons);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  // Show a Coupon
  read: async function (req, res) {
    try {
      let searchQuery = {};
      if (req.params.id.indexOf("@") !== -1) {
        // Email-based search logic can be implemented
        // searchQuery.email = { [Op.like]: `%${req.params.id}%` };
      } else {
        searchQuery = { code: req.params.id.toUpperCase() };
      }

      const coupon = await Coupon.findOne({ where: searchQuery });
      if (!coupon) {
        return res.status(404).json("Coupon not found");
      } else {
        return res.json(cleanUpCoupon(coupon));
      }
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  // Create a new Coupon
  create: async function (req, res) {
    try {
      let newCouponData = req.body;

      if (!newCouponData.code) {
        newCouponData.code = md5(Date.now() + Math.random());
      }
      newCouponData.code = newCouponData.code.toUpperCase();

      const newCoupon = await Coupon.create(newCouponData);
      return res.json(cleanUpCoupon(newCoupon));
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  // Update a Coupon
  update: async function (req, res) {
    try {
      const [numberAffected] = await Coupon.update(req.body, {
        where: { code: req.params.id.toUpperCase() },
      });

      if (numberAffected === 0) {
        return res.status(404).json("Coupon not found");
      } else {
        return res.status(200).json("Updated coupon " + req.params.id);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Delete a Coupon
  delete: async function (req, res) {
    try {
      let searchQuery = {};

      if (req.params.id === "ALL") {
        searchQuery = {};
      } else {
        searchQuery = { code: req.params.id.toUpperCase() };
      }

      const numberAffected = await Coupon.destroy({
        where: searchQuery,
      });

      if (numberAffected === 0) {
        return res.status(404).json("No coupons found to delete");
      } else {
        return res.status(200).json("Deleted " + numberAffected + " coupon(s)");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
