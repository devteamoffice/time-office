import React from "react";
import Button from "../Button";

const CartIcon = (props) => {
  const { className, onClick, cartItems = [] } = props; // Default to an empty array

  const Icon = (
    <span className="cart-icon">
      <i className="fa-solid fa-cart-shopping" style={{ fontSize: "30px" }}></i>
      {cartItems.length > 0 && (
        <span className="cart-badge">
          {cartItems.length >= 99 ? "99+" : cartItems.length}
        </span>
      )}
    </span>
  );

  const items = cartItems.length;

  return (
    <Button
      borderless
      variant="empty"
      className={className}
      ariaLabel={
        items > 0 ? `your cart has ${items} items` : "your cart is empty"
      }
      icon={Icon}
      onClick={onClick}
    />
  );
};

export default CartIcon;
