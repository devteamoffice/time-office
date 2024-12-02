import React from "react";
import { connect } from "react-redux";
import OrderSummary from "../../component/Cart/OrderSummary";
import HaveACode from "../../component/Cart/HaveACode";
import CartItem from "../../component/Cart/CartItem";
import { BagIcon } from "../../component/Common/Icon";
import mapDispatchToProps from "../../actions";

const Cart = ({
  cartItems = [], // Ensure cartItems defaults to an empty array
  handleRemoveFromCart,
  handleShopping,
  handleCheckout,
}) => {
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
                  cartItems.forEach((item) => handleRemoveFromCart(item._id))
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
            <OrderSummary />
            <div className="main-btn my-4 text-end">
              <button className="btn btn-primary" onClick={handleShopping}>
                Continue Shopping
              </button>
              <button className="btn btn-success" onClick={handleCheckout}>
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
  cartItems: state.cart?.cartItems || [], // Default to empty array
  cartTotal: state.cart?.cartTotal || 0, // Default to 0
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
