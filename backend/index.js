require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const keys = require("./config/keys");
const socket = require("./socket");
const setupDB = require("./utils/db");
const routes = require("./routes/router");
const router = require("express").Router();

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
const wishlistRoutes = require("./routes/wishlistRouter");
const { port } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true,
  })
);
app.use(cors());

setupDB();

// auth routes
app.use("/api/auth", authRoutes);

// user routes
app.use("/api/user", userRoutes);

// address routes
app.use("/api/address", addressRoutes);

// newsletter routes
app.use("/api/newsletter", newsletterRoutes);

// product routes
app.use("/api/product", productRoutes);

// category routes
app.use("/api/category", categoryRoutes);

// brand routes
app.use("/api/brand", brandRoutes);

// contact routes
app.use("/api/contact", contactRoutes);

// merchant routes
app.use("/api/merchant", merchantRoutes);

// cart routes
app.use("/api/cart", cartRoutes);

// order routes
app.use("/api/order", orderRoutes);

// Review routes
app.use("/api/review", reviewRoutes);

// Wishlist routes
app.use("/api/wishlist", wishlistRoutes);
// require("./config/passport")(app);
// app.use("/api", routes);

const server = app.listen(port, () => {
  console.log(
    `✓ Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
  );
});

socket(server);
