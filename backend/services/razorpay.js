const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZOR_PAYKEYID, // Replace with your Razorpay key_id
  key_secret: "YOUR_KEY_SECRET", // Replace with your Razorpay key_secret
});

module.exports = razorpay;
