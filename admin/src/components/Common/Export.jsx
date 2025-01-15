import React from "react";
import * as XLSX from "xlsx";

const Export = ({ tableData, fileName = "table_data" }) => {
  const handleExport = () => {
    if (!tableData || tableData.length === 0) {
      alert("No data available to export.");
      return;
    }

    // Create a worksheet from the table data
    const worksheet = XLSX.utils.json_to_sheet(tableData);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Generate an Excel file and trigger download
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <div className="dropdown">
      <a
        href="#"
        className="dropdown-toggle btn btn-sm btn-outline-light rounded"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Export
      </a>
      <div className="dropdown-menu dropdown-menu-end">
        <a
          href="#!"
          className="dropdown-item"
          onClick={handleExport} // Call the export function on click
        >
          Export to Excel
        </a>
      </div>
    </div>
  );
};

export default Export;
