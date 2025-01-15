import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../constants";
export const useFetchCart = (user, token) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/cart/`, {
          headers: { Authorization: `${token}` },
        });

        const cart = response.data.cart;
        setCartItems(cart.cart_items || []);
        setCartTotal(cart.total || 0);
        setCartId(cart.id || null);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user, token]);

  return { cartItems, cartTotal, cartId, loading };
};
