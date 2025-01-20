import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../constants";

const useFetchCartItems = (user, token) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user?.id) return;
      try {
        const response = await axios.get(`${API_URL}/cart/`, {
          headers: { Authorization: `${token}` },
        });
        const cart = response.data.carts?.[0];
        if (!cart || !Array.isArray(cart.items)) {
          setCartItems([]);
          return;
        }

        const items = cart.items.map((item) => {
          // Ensure product and images are safely accessed
          const images = Array.isArray(item.products?.images)
            ? item.products.images
            : item.products?.images
            ? JSON.parse(item.products.images)
            : [];

          return {
            ...item,
            products: {
              ...item.products,
              images: images,
            },
          };
        });

        setCartItems(items);
        setCartTotal(cart.total || 0);
        setCartId(cart.id);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user && token) {
      fetchCartItems();
    }
  }, [user, token]);

  return { cartItems, cartTotal, cartId, loading };
};

export default useFetchCartItems;
