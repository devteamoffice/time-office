const axios = require("axios");
require("dotenv").config();

// Shiprocket API configuration
const SHIPROCKET_BASE_URL = "https://apiv2.shiprocket.in/v1/external";
const SHIPROCKET_EMAIL = process.env.SHIPROCKET_EMAIL;
const SHIPROCKET_PASSWORD = process.env.SHIPROCKET_PASSWORD;

let token = null;

// Function to authenticate with Shiprocket API
async function authenticate() {
  try {
    const response = await axios.post(`${SHIPROCKET_BASE_URL}/auth/login`, {
      email: SHIPROCKET_EMAIL,
      password: SHIPROCKET_PASSWORD,
    });
    token = response.data.token;
    return token;
  } catch (error) {
    console.error("Error authenticating with Shiprocket:", error.message);
    throw new Error("Shiprocket authentication failed");
  }
}

// Axios instance with dynamic token
const api = axios.create({
  baseURL: SHIPROCKET_BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    if (!token) {
      token = await authenticate();
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Fetch Payment Mode
 * @param {String} orderId - Shiprocket Order ID
 * @returns {Promise<String>} - Payment mode (e.g., COD, Prepaid)
 */
async function fetchPaymentMode(orderId) {
  try {
    const response = await api.get(`/orders/show/${orderId}`);
    return response.data.payment_method || "Unknown";
  } catch (error) {
    console.error("Error fetching payment mode:", error.message);
    throw new Error("Could not fetch payment mode");
  }
}

/**
 * Create a new order in Shiprocket
 * @param {Object} orderData - Order details (shipping, billing, items, etc.)
 * @returns {Promise<Object>} - Created order details
 */
async function createOrder(orderData) {
  try {
    const response = await api.post("/orders/create/adhoc", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order in Shiprocket:", error.message);
    throw new Error("Could not create order");
  }
}

/**
 * Cancel an order in Shiprocket
 * @param {String} orderId - Shiprocket Order ID
 * @returns {Promise<Object>} - Response from Shiprocket API
 */
async function cancelOrder(orderId) {
  try {
    const response = await api.post(`/orders/cancel`, { order_id: orderId });
    return response.data;
  } catch (error) {
    console.error("Error cancelling order:", error.message);
    throw new Error("Could not cancel order");
  }
}

/**
 * Fetch all orders
 * @param {Object} query - Query parameters for filtering orders
 * @returns {Promise<Object>} - List of orders
 */
async function fetchOrders(query = {}) {
  try {
    const response = await api.get("/orders", { params: query });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    throw new Error("Could not fetch orders");
  }
}

module.exports = {
  authenticate,
  fetchPaymentMode,
  createOrder,
  cancelOrder,
  fetchOrders,
};
