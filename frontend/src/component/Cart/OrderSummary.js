import React from "react";
import { FaClipboardList } from "react-icons/fa6";
import { RiTicketLine } from "react-icons/ri";
import { MdOutlineBikeScooter } from "react-icons/md";
import { RiCalculatorFill } from "react-icons/ri";

const OrderSummary = ({
  cartItems = [], // Default to an empty array if cartItems is undefined
  discount = 0, // Default discount to 0 if undefined
  deliveryCharge = 0, // Default deliveryCharge to 0 if undefined
  estimatedDelivery, // Optional field, no default
}) => {
  // Calculate Sub Total (sum of all item total prices)
  const subTotal = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  // Calculate Tax (18% of Sub Total)
  const tax = subTotal * 0.18;

  // Calculate Total Price (Sub Total + Tax - Discount + Delivery Charge)
  const totalPrice = subTotal + tax - discount + deliveryCharge;

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Order Summary</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table mb-0">
            <tbody>
              {/* Sub Total */}
              <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1">
                    <FaClipboardList className="align-middle" />
                    Sub Total :
                  </p>
                </td>
                <td className="text-end text-dark fw-medium px-0">
                  Rs {subTotal.toFixed(2)}
                </td>
              </tr>

              {/* Discount */}
              <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1">
                    <RiTicketLine className="align-middle" />
                    Discount :
                  </p>
                </td>
                <td className="text-end text-dark fw-medium px-0">
                  -Rs {discount.toFixed(2)}
                </td>
              </tr>

              {/* Delivery Charge */}
              <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1">
                    <MdOutlineBikeScooter className="align-middle" />
                    Delivery Charge :
                  </p>
                </td>
                <td className="text-end text-dark fw-medium px-0">
                  Rs {deliveryCharge.toFixed(2)}
                </td>
              </tr>

              {/* Estimated Tax */}
              <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1">
                    <RiCalculatorFill className="align-middle" />
                    Estimated Tax (18%) :
                  </p>
                </td>
                <td className="text-end text-dark fw-medium px-0">
                  Rs {tax.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card-footer bg-light-subtle border-top">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p className="fw-medium text-dark mb-0">Total Amount</p>
          </div>
          <div>
            <p className="fw-medium text-dark mb-0">
              Rs {totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Delivery Info */}
        {estimatedDelivery && (
          <div
            className="alert alert-warning alert-icon mt-3 mb-0"
            role="alert"
          >
            <div className="d-flex align-items-center">
              <div className="avatar-sm rounded bg-warning d-flex justify-content-center align-items-center fs-22 me-2 flex-shrink-0">
                <MdOutlineBikeScooter />
              </div>
              <div className="flex-grow-1">
                Estimated Delivery by {estimatedDelivery}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
