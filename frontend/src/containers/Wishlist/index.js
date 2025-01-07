import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubPage from "../../component/Manager/SubPage";
import NotFound from "../../component/Common/NotFound";
import LoadingIndicator from "../../component/Common/LoadingIndicator";
import Pagination from "../../component/Extras/Pagination";
import ProductFilter from "../../component/Product/ProductFilter";
import SingleProduct from "../../component/Product/SingleProduct";
import { AuthContext } from "../../context/Socket/AuthContext";
import { fetchWishlist } from "./actions";

const Wishlist = () => {
  const { userId } = useContext(AuthContext); // Get userId from AuthContext
  const dispatch = useDispatch();

  // Redux state selectors
  const wishlist = useSelector((state) => state.wishlist?.wishlist || []);
  const isLoading = useSelector((state) => state.wishlist?.isLoading || false);

  useEffect(() => {
    if (userId) {
      dispatch(fetchWishlist()); // Fetch wishlist on component mount
    }
  }, [userId, dispatch]);

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

          <SubPage title={"Your Wishlist"} isMenuOpen={null}>
            {isLoading && <LoadingIndicator />}
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
