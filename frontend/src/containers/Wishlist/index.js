import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";
import SubPage from "../../component/Manager/SubPage";
import NotFound from "../../component/Common/NotFound";
import LoadingIndicator from "../../component/Common/LoadingIndicator";
import Pagination from "../../component/Extras/Pagination";
import WishList from "../../component/Wishlist/Wishlist";
import { AuthContext } from "../../context/Socket/AuthContext";
const Wishlist = () => {
  const { userId } = useContext(AuthContext); // Get userId from AuthContext
  const dispatch = useDispatch();

  // Redux state selectors
  const wishlist = useSelector((state) => state.wishlist?.wishlist || []);
  const isLoading = useSelector((state) => state.wishlist?.isLoading || false);

  // Fetch wishlist when component mounts
  useEffect(() => {
    if (userId) {
      dispatch(actions.fetchWishlist(userId)); // Dispatch fetchWishlist action with userId
    }
  }, [userId, dispatch]);

  const displayWishlist = wishlist.length > 0;

  return (
    <div className="col-lg-9">
      <div className="card bg-light-subtle">
        <div className="card-header border-0">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item fw-medium">
                  <a href="javascript: void(0);" className="text-dark">
                    Wishlist
                  </a>
                </li>
                <li className="breadcrumb-item active">Store</li>
              </ol>
              <p className="mb-0 text-muted">
                Showing all <span className="text-dark fw-semibold">5,786</span>{" "}
                items results
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <SubPage title={"Your Wishlist"} isMenuOpen={null}>
          {isLoading && <LoadingIndicator />}
          {displayWishlist && (
            <WishList
              wishlist={wishlist}
              updateWishlist={actions.updateWishlist}
            />
          )}
          {!isLoading && !displayWishlist && (
            <NotFound message="You have no items in your wishlist yet." />
          )}
        </SubPage>
      </div>
      <Pagination />
    </div>
  );
};

export default Wishlist;
