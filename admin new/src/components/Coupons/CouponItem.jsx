import React, { useEffect, useState } from "react";
import Actions from "../Common/Actions";
import axios from "axios";
import { API_URL, SOCKET_URL } from "../../constants";
import DeleteModal from "../Common/DeleteModal";

const CouponItem = () => {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const handleDelete = async () => {
    if (selectedCoupon) {
      try {
        await axios.delete(`${API_URL}/coupons/delete/${selectedCoupon.id}`);
        selectedCoupon((prev) =>
          prev.filter((coupon) => coupon.id !== selectedCoupon.id)
        );
      } catch (error) {
        console.error("Error deleting coupon:", error);
      } finally {
        setSelectedCoupon(null);
        setModalVisible(false);
      }
    }
  };

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/coupons`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setCoupons(response.data);
      } catch (error) {
        console.error("Error fetching coupons:", error);
      }
    };

    fetchCoupons();
  }, []);

  return (
    <>
      <DeleteModal
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)}
        isVisible={modalVisible}
        item={selectedCoupon}
        itemType="coupon"
      />
      {coupons.map((coupon) => (
        <tr key={coupon.id}>
          <td>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`check-${coupon.id}`}
              />
              <label
                className="form-check-label"
                htmlFor={`check-${coupon.id}`}
              >
                &nbsp;
              </label>
            </div>
          </td>
          <td>{coupon.code}</td>
          <td>{coupon.email || "-"}</td>
          <td>{coupon.max_redemptions || "-"}</td>
          <td>
            <span
              className={`badge fs-12 ${
                coupon.status === "active"
                  ? "text-success bg-success-subtle"
                  : "text-danger bg-danger-subtle"
              }`}
            >
              {coupon.status}
            </span>
          </td>
          <td>{coupon.discount_type}</td>
          <td>{coupon.discount_value}</td>
          <td>
            {coupon.start_date
              ? new Date(coupon.start_date).toLocaleDateString()
              : "-"}
          </td>
          <td>
            {coupon.end_date
              ? new Date(coupon.end_date).toLocaleDateString()
              : "-"}
          </td>
          <td>
            {Array.isArray(coupon.applicable_products) &&
            coupon.applicable_products.length > 0
              ? coupon.applicable_products.join(", ")
              : "All Products"}
          </td>

          <td>
            <Actions
              id={coupon.id}
              name={coupon.code}
              viewUrl={`${SOCKET_URL}/cart?coupon=${coupon.code}`}
              editUrl={`/coupons/${coupon.id}/edit`}
              deleteAction={() => {
                setModalVisible(true);
              }}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default CouponItem;
