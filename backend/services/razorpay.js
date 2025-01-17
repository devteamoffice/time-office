const Razorpay = require("razorpay");
require("dotenv").config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEYID, // Razorpay key_id from .env
  key_secret: process.env.RAZORPAY_SECRETKEY, // Razorpay key_secret from .env
});

module.exports = razorpay;
