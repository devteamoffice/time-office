/*
 *
 * WishList
 *
 */

import React from "react";

import { connect } from "react-redux";

import actions from "../../actions";

import SubPage from "../../component/Manager/SubPage";
import NotFound from "../../component/Common/NotFound";
import LoadingIndicator from "../../component/Common/LoadingIndicator";
import Pagination from "../../component/Extras/Pagination";
import WishList from "../../component/Wishlist/Wishlist";
class Wishlist extends React.PureComponent {
  componentDidMount() {
    this.props.fetchWishlist();
  }

  render() {
    const { wishlist, isLoading, updateWishlist } = this.props;

    const displayWishlist = wishlist.length > 0;

    return (
      <div class="col-lg-9">
        <div class="card bg-light-subtle">
          <div class="card-header border-0">
            <div class="row justify-content-between align-items-center">
              <div class="col-lg-6">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item fw-medium">
                    <a href="javascript: void(0);" class="text-dark">
                      Categories
                    </a>
                  </li>
                  <li class="breadcrumb-item active">All Product</li>
                </ol>
                <p class="mb-0 text-muted">
                  Showing all <span class="text-dark fw-semibold">5,786</span>{" "}
                  items results
                </p>
              </div>
            </div>
          </div>
        </div>
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

const mapStateToProps = (state) => ({
  wishlist: state.wishlist?.wishlist || [], // Fallback to an empty array
  isLoading: state.wishlist?.isLoading || false,
});

export default connect(mapStateToProps, actions)(Wishlist);
