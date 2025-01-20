const socketio = require("socket.io");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const keys = require("./config/keys");
const setupDB = require("./utils/db");
const { processImagesOnProducts } = require("./utils/productImages");

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
const subCategoryRoutes = require("./routes/subCateogoryRouter");
const adminRoutes = require("./routes/adminRouter");
const rolesRoutes = require("./routes/rolesRouter");

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

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://teamoffice.in",
    ],
    credentials: true,
  })
);

// Database Setup
setupDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/user", userRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/subcategory", subCategoryRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/merchant", merchantRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/discount", discountRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/admin", adminRoutes);

// Start Server
const server = app.listen(port, async () => {
  console.log(`✓ Listening on port ${port}. Visit http://localhost:${port}/`);

  // Run image upload script on server startup
  // try {
  //   await processImagesOnProducts();
  //   console.log("Images upload check completed.");
  // } catch (error) {
  //   console.error("Error during image upload process:", error);
  // }
});

// Initialize Socket
const io = socketio(server);
require("./socket")(io); // Pass the io object to the socket handler
