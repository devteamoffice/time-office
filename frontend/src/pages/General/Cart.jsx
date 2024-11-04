import React from "react";
import OrderSummary from "../../component/Cart/OrderSummary";
import HaveACode from "../../component/Cart/HaveACode";
import CartItem from "../../component/Cart/CartItem";
import { BagIcon, CloseIcon } from "../../component/Common/Icon";

const Cart = (props) => {
  const {
    isCartOpen,
    cartItems = [], // Set a default empty array to avoid undefined issues
    cartTotal,
    toggleCart,
    handleShopping,
    handleCheckout,
    handleRemoveFromCart,
    placeOrder,
    authenticated,
  } = props;

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex mb-4 bg-primary p-3 rounded">
              <p className="fw-medium fs-15 text-white m-0">
                There are {cartItems.length} products in your cart
              </p>
              <a
                href="#!"
                className="ms-auto text-white fs-14 text-decoration-underline"
              >
                Clear cart
              </a>
            </div>
            {cartItems.length > 0 ? (
              <div className="cart-body">
                {cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    toggleCart={toggleCart}
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
            <OrderSummary />

            <div className="main-btn my-4 text-end">
              <a href="/products" className="btn btn-primary">
                Continue Shopping
              </a>
              <a href="/order/:id/checkout" className="btn btn-success">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
