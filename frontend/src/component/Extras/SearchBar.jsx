import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";

const SearchBar = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // Search handler
  const searchHandler = async () => {
    if (!name) return; // Do nothing if the input is empty

    try {
      const res = await axios.get(`${API_URL}/product/list/search/${name}`);
      navigate(`/store?name=${name}`, {
        state: { searchResult: res.data.products },
      });
    } catch (err) {
      console.error("Failed to fetch search results: ", err);
      alert("Failed to fetch search results. Please try again later.");
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      searchHandler(); // Call the search function
    }
  };

  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <span className="fa fa-search" style={{ lineHeight: "25px" }}></span>
      <input
        type="text"
        placeholder="Search products..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key press
        aria-label="Search products"
      />
    </form>
  );
};

export default SearchBar;
