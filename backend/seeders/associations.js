const Cart = require("../models/cart");

const { Product, CartItem } = require("../models");

// Log associations
console.log("Cart associations:", Cart.associations);
console.log("CartItem associations:", CartItem.associations);
console.log("Product associations:", Product.associations);
