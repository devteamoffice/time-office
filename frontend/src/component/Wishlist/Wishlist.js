import React from "react";
import Pagination from "../Common/Pagination";
import SubPage from "../Manager/SubPage";
import LoadingIndicator from "../Extras/LoadingIndicator";
import NotFound from "../Common/NotFound";

const Wishlist = (props) => {
  const { wishlist, isLoading, updateWishlist } = props;

  const displayWishlist = wishlist.length > 0;

  return (
    <div class="col-lg-9">
      <div class="row">
        <SubPage title={"Your Wishlist"} isMenuOpen={null}>
          {isLoading && <LoadingIndicator />}
          {displayWishlist && (
            <Wishlist wishlist={wishlist} updateWishlist={updateWishlist} />
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
