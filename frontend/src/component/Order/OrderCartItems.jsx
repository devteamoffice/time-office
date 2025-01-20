import React from "react";
import { AuthContext } from "../../context/Socket/AuthContext";
import useFetchCartItems from "../../utils/fetchCartItems";

const OrderCartItems = () => {
  const { user } = React.useContext(AuthContext); // Fetch user from AuthContext
  const token = localStorage.getItem("token"); // Retrieve token from localStorage

  // Use the custom hook to fetch cart items
  const { cartItems, loading } = useFetchCartItems(user, token);

  // Loading state
  if (loading) {
    return <div>Loading cart items...</div>;
  }

  // Empty cart state
  if (cartItems.length === 0) {
    return <div>No items in the cart.</div>;
  }

  return (
    <div className="card-body">
      <div className="table-responsive">
        {cartItems.map((item) => {
          // Safely parse the images from a string to an array if they exist
          const images = Array.isArray(item.products?.images)
            ? item.products.images
            : item.products?.images
            ? JSON.parse(item.products.images)
            : [];
          const imageUrl = images[0] || ""; // Use the first image if available

          return (
            <div key={item.id} className="d-flex align-items-center gap-3 mb-4">
              {/* Displaying the product image */}
              <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={item.products.name}
                    className="avatar"
                  />
                )}
              </div>

              {/* Product details */}
              <div>
                <a href="#!" className="text-dark fw-medium fs-15">
                  {item.products.name}
                </a>
              </div>

              {/* Product price and quantity */}
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
