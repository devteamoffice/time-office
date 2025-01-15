import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import OrderSummary from "../../component/Cart/OrderSummary";
import HaveACode from "../../component/Cart/HaveACode";
import CartItem from "../../component/Cart/CartItem";
import { BagIcon } from "../../component/Common/Icon";
import { API_URL } from "../../constants";
import axios from "axios";
import mapDispatchToProps from "../../actions";
import { AuthContext } from "../../context/Socket/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = ({ handleRemoveFromCart, handleShopping, handleCheckout }) => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [cartId, setCartId] = useState(null); // New state for cartId
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchCartItems = async () => {
    if (!user?.id) return;

    try {
      const response = await axios.get(`${API_URL}/cart/`, {
        headers: { Authorization: `${token}` },
      });

      const cart = response.data.cart;
      setCartItems(cart.cart_items || []);
      setCartTotal(cart.total || 0);
      setCartId(cart.id); // Set cartId from response
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [user]);

  const handleContinueShopping = () => {
    navigate("/store");
  };

  const handleCheckoutClick = () => {
    if (cartId) {
      navigate(`/order/${cartId}/checkout`); // Navigate with cartId
    } else {
      console.error("Cart ID not found!");
    }
  };

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex mb-4 bg-primary p-3 rounded">
              <p className="fw-medium fs-15 text-white m-0">
                There are {cartItems.length} products in your cart
              </p>
              <button
                className="ms-auto text-white fs-14 text-decoration-underline btn btn-link"
                onClick={() =>
                  cartItems.forEach((item) => handleRemoveFromCart(item.id))
                }
              >
                Clear cart
              </button>
            </div>
            {cartItems.length > 0 ? (
              <div className="cart-body">
                {cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-cart">
                <BagIcon />
                <p>Your shopping cart is empty</p>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <HaveACode />
            <OrderSummary
              cartItems={cartItems}
              discount={discount}
              deliveryCharge={deliveryCharge}
              estimatedDelivery="25 April, 2024"
            />
            <div className="main-btn my-4 text-end">
              <button
                className="btn btn-primary"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button className="btn btn-success" onClick={handleCheckoutClick}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart?.cartItems || [],
  cartTotal: state.cart?.cartTotal || 0,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
