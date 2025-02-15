import React, { useEffect, useState } from "react";
import { AuthContext } from "../../context/Socket/AuthContext";
import useFetchCartItems from "../../utils/fetchCartItems";
import axios from "axios";
import { API_URL } from "../../constants";

const BillingPayment = ({
  discount = 0, // Default to 0 if discount is not provided
  deliveryCharge = 0, // Default to 0 if delivery charge is not provided
  estimatedDelivery, // Estimated delivery date (optional)
}) => {
  const { user } = React.useContext(AuthContext); // Fetch user from AuthContext
  const token = localStorage.getItem("token"); // Retrieve token from localStorage

  // Use the custom hook to fetch cart items
  const { cartItems, loading } = useFetchCartItems(user, token);

  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/cart`);
        setPaymentDetails(response.data); // Assuming this contains subtotal, tax, discount, etc.
      } catch (error) {
        console.error("Failed to fetch payment details", error);
      }
    };

    fetchPaymentDetails();
  }, []);

  if (loading || !paymentDetails) {
    return <div>Loading payment details...</div>;
  }

  // Get values from API response (paymentDetails)
  const subTotal =
    cartItems.reduce((total, item) => total + item.totalPrice, 0) || 0;
  const tax = paymentDetails?.tax || 0;
  const discountFromAPI = paymentDetails?.discount || discount;
  const deliveryChargeFromAPI =
    paymentDetails?.deliveryCharge || deliveryCharge;

  // Calculate Total Price (Sub Total + Tax - Discount + Delivery Charge)
  const totalPrice = subTotal + tax - discountFromAPI + deliveryChargeFromAPI;

  return (
    <div className="card-footer bg-light-subtle">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <p className="fw-medium text-dark mb-0">Total Amount</p>
        </div>
        <div>
          <p className="fw-medium text-dark mb-0">Rs {totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="alert alert-warning alert-icon mt-3 mb-0" role="alert">
        <div className="d-flex align-items-center">
          <div className="avatar-sm rounded bg-warning d-flex justify-content-center align-items-center fs-22 me-2 flex-shrink-0">
            <iconify-icon
              icon="solar:kick-scooter-broken"
              className="align-middle text-white"
            ></iconify-icon>
          </div>
          <div className="flex-grow-1">
            Estimated Delivery by {estimatedDelivery}
          </div>
        </div>
      </div>
      <table className="table mb-0">
        <tbody>
          <tr>
            <td className="px-0">
              <p className="d-flex mb-0 align-items-center gap-1">
                <iconify-icon icon="solar:clipboard-text-broken"></iconify-icon>{" "}
                Sub Total :{" "}
              </p>
            </td>
            <td className="text-end text-dark fw-medium px-0">
              Rs {subTotal.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="px-0">
              <p className="d-flex mb-0 align-items-center gap-1">
                <iconify-icon
                  icon="solar:ticket-broken"
                  className="align-middle"
                ></iconify-icon>{" "}
                Discount :{" "}
              </p>
            </td>
            <td className="text-end text-dark fw-medium px-0">
              -Rs {discountFromAPI.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="px-0">
              <p className="d-flex mb-0 align-items-center gap-1">
                <iconify-icon
                  icon="solar:kick-scooter-broken"
                  className="align-middle"
                ></iconify-icon>{" "}
                Delivery Charge :{" "}
              </p>
            </td>
            <td className="text-end text-dark fw-medium px-0">
              Rs {deliveryChargeFromAPI.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="px-0">
              <p className="d-flex mb-0 align-items-center gap-1">
                <iconify-icon
                  icon="solar:calculator-minimalistic-broken"
                  className="align-middle"
                ></iconify-icon>{" "}
                Estimated Tax (15.5%) :{" "}
              </p>
            </td>
            <td className="text-end text-dark fw-medium px-0">
              Rs {tax.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillingPayment;
