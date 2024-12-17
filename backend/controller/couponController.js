const md5 = require("md5");
const Coupon = require("../models/coupons");

const cleanUpCoupon = (coupon) => {
  const cleanCoupon = coupon.toJSON();
  delete cleanCoupon.id;
  cleanCoupon.id = cleanCoupon.code;
  return cleanCoupon;
};

module.exports = {
  // List all Coupons
  list: async (req, res) => {
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

  // Create a new Coupon
  create: async (req, res) => {
    try {
      let newCouponData = req.body;

      // Default code generation if empty
      if (!newCouponData.code) {
        newCouponData.code = md5(Date.now() + Math.random()).toUpperCase();
      } else {
        newCouponData.code = newCouponData.code.toUpperCase();
      }

      // Ensure discount_value is a valid number
      if (
        !newCouponData.discount_value ||
        isNaN(newCouponData.discount_value)
      ) {
        return res.status(400).json({ message: "Invalid discount value" });
      }

      // Convert applicable_products to JSON
      if (newCouponData.applicable_products) {
        newCouponData.applicable_products = JSON.stringify(
          newCouponData.applicable_products
        );
      }

      const newCoupon = await Coupon.create(newCouponData);
      return res.json(cleanUpCoupon(newCoupon));
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Error creating coupon" });
    }
  },

  // Read a Coupon by Code
  read: async (req, res) => {
    try {
      const searchQuery = { code: req.params.id.toUpperCase() };
      const coupon = await Coupon.findOne({ where: searchQuery });

      if (!coupon) {
        return res.status(404).json({ message: "Coupon not found" });
      }

      return res.json(cleanUpCoupon(coupon));
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  // Update a Coupon
  update: async (req, res) => {
    try {
      const [numberAffected] = await Coupon.update(req.body, {
        where: { code: req.params.id.toUpperCase() },
      });

      if (numberAffected === 0) {
        return res.status(404).json({ message: "Coupon not found" });
      }

      return res.status(200).json({ message: "Coupon updated successfully" });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Delete a Coupon
  delete: async (req, res) => {
    try {
      const searchQuery =
        req.params.id === "ALL" ? {} : { code: req.params.id.toUpperCase() };

      const numberAffected = await Coupon.destroy({
        where: searchQuery,
      });

      if (numberAffected === 0) {
        return res.status(404).json({ message: "No coupons found to delete" });
      }

      return res
        .status(200)
        .json({ message: `Deleted ${numberAffected} coupon(s)` });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
