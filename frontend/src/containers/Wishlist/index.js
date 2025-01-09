import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Socket/AuthContext";
import SubPage from "../../component/Manager/SubPage";
import NotFound from "../../component/Common/NotFound";
import LoadingIndicator from "../../component/Common/LoadingIndicator";
import Pagination from "../../component/Extras/Pagination";
import ProductFilter from "../../component/Product/ProductFilter";
import SingleProduct from "../../component/Product/SingleProduct";
import axios from "axios";
import { API_URL } from "../../constants";

const Wishlist = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated || !user?.id) {
      setError("User is not authenticated or user ID is missing.");
      setIsLoading(false);
      return;
    }

    const fetchWishlist = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/wishlist`, {
          params: { userId: user.id }, // Use `user.id` as the user ID
          headers: {
            Authorization: `${token}`, // Ensure Bearer prefix if required
          },
        });

        console.log("Fetched Wishlist:", response.data);
        setWishlist(response.data.products || []); // Fallback to an empty array
      } catch (err) {
        console.error("Error fetching wishlist:", err);
        setError("Failed to fetch wishlist. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishlist();
  }, [isAuthenticated, user?.id]);

  return (
    <div className="container-xxl">
      <div className="row">
        <ProductFilter />
        <div className="col-lg-9">
          <div className="card bg-light-subtle">
            <div className="card-header border-0">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item fw-medium">
                      <a href="#" className="text-dark">
                        Wishlist
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Your Products</li>
                  </ol>
                  <p className="mb-0 text-muted">
                    Showing{" "}
                    <span className="text-dark fw-semibold">
                      {wishlist.length}
                    </span>{" "}
                    items in your wishlist.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <SubPage title="Your Wishlist" isMenuOpen={null}>
            {isLoading && <LoadingIndicator />}
            {!isLoading && error && <NotFound message={error} />}
            {!isLoading && wishlist.length > 0 && (
              <SingleProduct products={wishlist} />
            )}
            {!isLoading && wishlist.length === 0 && (
              <NotFound message="You have no items in your wishlist yet." />
            )}
          </SubPage>

          {wishlist.length > 0 && <Pagination />}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
