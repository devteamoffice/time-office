import React from "react";
import { connect } from "react-redux";
import Button from "../Button";
import mapDispatchToProps from "../../../actions";

const CartIcon = ({ className, onClick, cartItems = [] }) => {
  // Ensure cartItems is an array and calculate the total items in the cart
  const totalItems = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)
    : 0;

  const Icon = (
    <span className="cart-icon position-relative">
      <i className="fa-solid fa-cart-shopping" style={{ fontSize: "30px" }}></i>
      {totalItems > 0 && (
        <span
          className="cart-badge position-absolute"
          style={{
            top: "-5px",
            left: "20px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {totalItems >= 99 ? "99+" : totalItems}
        </span>
      )}
    </span>
  );

  return (
    <Button
      borderless
      variant="empty"
      className={className}
      ariaLabel={
        totalItems > 0
          ? `Your cart has ${totalItems} items`
          : "Your cart is empty"
      }
      icon={Icon}
      onClick={onClick}
    />
  );
};

// Map state to props
const mapStateToProps = (state) => ({
  cartItems: state.cart?.cartItems || [], // Default to an empty array
});

// Connect Redux
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
