import React from "react";
import Actions from "../Common/Actions";

const CategoryItem = ({ category }) => {
  return (
    <tr>
      <td>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={`customCheck${category.id}`}
          />
          <label
            className="form-check-label"
            htmlFor={`customCheck${category.id}`}
          ></label>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center gap-2">
          <p className="text-dark fw-medium fs-15 mb-0">{category.name}</p>
        </div>
      </td>
      <td>{category.isActive ? "Active" : "Inactive"}</td>
      <td>
        {category.created
          ? new Date(category.created).toLocaleDateString()
          : "N/A"}
      </td>
      <td>
        <Actions />
      </td>
    </tr>
  );
};

export default CategoryItem;
