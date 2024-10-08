const router = require("express").Router();

const authRoutes = require("./authRouter");
const userRoutes = require("./userRouter");
const addressRoutes = require("./addressRouter");
const newsletterRoutes = require("./newsletterRouter");

const productRoutes = require("./productRouter");
const categoryRoutes = require("./categoryRouter");
const brandRoutes = require("./brandRouter");
const contactRoutes = require("./contactRouter");
const merchantRoutes = require("./merchantRouter");
const cartRoutes = require("./cartRouter");
const orderRoutes = require("./orderRouter");
const reviewRoutes = require("./reviewRouter");
const wishlistRoutes = require("./wishlistRouter");

// auth routes
router.use("/auth", authRoutes);

// user routes
router.use("/user", userRoutes);

// address routes
router.use("/address", addressRoutes);

// newsletter routes
router.use("/newsletter", newsletterRoutes);

// product routes
router.use("/product", productRoutes);

// category routes
router.use("/category", categoryRoutes);

// brand routes
router.use("/brand", brandRoutes);

// contact routes
router.use("/contact", contactRoutes);

// merchant routes
router.use("/merchant", merchantRoutes);

// cart routes
router.use("/cart", cartRoutes);

// order routes
router.use("/order", orderRoutes);

// Review routes
router.use("/review", reviewRoutes);

// Wishlist routes
router.use("/wishlist", wishlistRoutes);

module.exports = router;
