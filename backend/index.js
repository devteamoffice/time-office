require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const keys = require("./config/keys");
const socket = require("./socket");
const setupDB = require("./utils/db");
const { processImagesOnStartup } = require("./utils/productImages");

const authRoutes = require("./routes/authRouter");
const userRoutes = require("./routes/userRouter");
const addressRoutes = require("./routes/addressRouter");
const newsletterRoutes = require("./routes/newsletterRouter");
const productRoutes = require("./routes/productRouter");
const categoryRoutes = require("./routes/categoryRouter");
const brandRoutes = require("./routes/brandRouter");
const contactRoutes = require("./routes/contactRouter");
const merchantRoutes = require("./routes/merchantRouter");
const cartRoutes = require("./routes/cartRouter");
const orderRoutes = require("./routes/orderRouter");
const reviewRoutes = require("./routes/reviewRouter");
const couponRoutes = require("./routes/couponRouter");
const discountRoutes = require("./routes/discountRouter");
const wishlistRoutes = require("./routes/wishlistRouter");

const { port } = keys;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false, // Adjust as per your project needs
    frameguard: true,
  })
);
app.use(cors());

// Database Setup
setupDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/merchant", merchantRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/discount", discountRoutes);
app.use("/api/coupons", couponRoutes);

// Start Server
const server = app.listen(port, async () => {
  console.log(`✓ Listening on port ${port}. Visit http://localhost:${port}/`);

  // Run image upload script on server startup
  // try {
  //   await processImagesOnStartup();
  //   console.log("Images upload check completed.");
  // } catch (error) {
  //   console.error("Error during image upload process:", error);
  // }
});

// Initialize Socket
socket(server);
