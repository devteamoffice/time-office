import React from "react";

const OrderItem = ({ order, onDelete }) => {
  return (
    <tr>
      <td>{order.orderNumber}</td>
      <td>{new Date(order.date).toLocaleDateString()}</td>
      <td>
        <a href="#!" className="link-primary fw-medium">
          {order.customerName}
        </a>
      </td>
      <td>{order.type}</td>
      <td>${order.amount.toFixed(2)}</td>
      <td>
        <span
          className={`badge ${
            order.paymentStatus === "Paid"
              ? "bg-success text-white"
              : "bg-light text-dark"
          } px-2 py-1 fs-13`}
        >
          {order.paymentStatus}
        </span>
      </td>
      <td>{order.quantity}</td>
      <td>{order.notes || "-"}</td>
      <td>
        <span
          className={`badge ${
            order.status === "Draft"
              ? "border border-secondary text-secondary"
              : "bg-primary text-white"
          } px-2 py-1 fs-13`}
        >
          {order.status}
        </span>
      </td>
      <td>
        <div className="d-flex gap-2">
          <a href="#!" className="btn btn-light btn-sm">
            <iconify-icon
              icon="solar:eye-broken"
              className="align-middle fs-18"
            ></iconify-icon>
          </a>
          <a href="#!" className="btn btn-soft-primary btn-sm">
            <iconify-icon
              icon="solar:pen-2-broken"
              className="align-middle fs-18"
            ></iconify-icon>
          </a>
          <button
            onClick={() => onDelete(order.id)}
            className="btn btn-soft-danger btn-sm"
          >
            <iconify-icon
              icon="solar:trash-bin-minimalistic-2-broken"
              className="align-middle fs-18"
            ></iconify-icon>
          </button>
        </div>
      </td>
    </tr>
  );
};
export default OrderItem;
