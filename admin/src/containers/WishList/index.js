/*
 *
 * WishList
 *
 */

import React from "react";

import { connect } from "react-redux";

import actions from "../../actions";

import SubPage from "../../component/Manager/SubPage";
import WishList from "../../component/Manager/WishList";
import NotFound from "../../component/Common/NotFound";
import LoadingIndicator from "../../component/Common/LoadingIndicator";
import Pagination from "../../component/Extras/Pagination";

class Wishlist extends React.PureComponent {
  componentDidMount() {
    this.props.fetchWishlist();
  }

  render() {
    const { wishlist, isLoading, updateWishlist } = this.props;

    const displayWishlist = wishlist.length > 0;

    return (
      <div class="col-lg-9">
        <div class="row">
          <SubPage title={"Your Wishlist"} isMenuOpen={null}>
            {isLoading && <LoadingIndicator />}
            {displayWishlist && (
              <WishList wishlist={wishlist} updateWishlist={updateWishlist} />
            )}
            {!isLoading && !displayWishlist && (
              <NotFound message="You have no items in your wishlist yet." />
            )}
          </SubPage>
        </div>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.wishlist,
    isLoading: state.wishlist.isLoading,
  };
};

export default connect(mapStateToProps, actions)(Wishlist);
