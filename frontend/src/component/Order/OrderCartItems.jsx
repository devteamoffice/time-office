import React from "react";
import { AuthContext } from "../../context/Socket/AuthContext";
import { useFetchCart } from "../../utils/fetchCartItems"; // Assuming this is a custom hook

const OrderCartItems = () => {
  const { user } = React.useContext(AuthContext);
  const token = localStorage.getItem("token");

  // Use the custom hook to fetch cart items
  const { cartItems, loading } = useFetchCart(user, token);

  if (loading) {
    return <div>Loading cart items...</div>;
  }

  if (cartItems.length === 0) {
    return <div>No items in the cart.</div>;
  }

  return (
    <div className="card-body">
      <div className="table-responsive">
        {cartItems.map((item) => {
          // Parse the image URLs from string to an array
          const images = JSON.parse(item.product.images || "[]");
          const imageUrl = images[0] || ""; // Use the first image if available

          return (
            <div key={item.id} className="d-flex align-items-center gap-3 mb-4">
              <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                {/* Displaying the first image if available */}
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={item.product.name}
                    className="avatar"
                  />
                )}
              </div>
              <div>
                <a href="#!" className="text-dark fw-medium fs-15">
                  {item.product.name}
                </a>
              </div>
              <div className="ms-auto text-end">
                <p className="text-dark fw-medium mb-1">${item.totalPrice}</p>
                <p className="mb-0">Q. {item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderCartItems;
