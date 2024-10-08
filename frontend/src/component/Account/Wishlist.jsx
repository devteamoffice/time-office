import React from "react";
import AccountNav from "./AccountNav";

const Wishlist = () => {
  return (
    <section class="flat-spacing-11">
      <div class="container">
        <div class="row">
          <AccountNav />
          <div class="col-lg-9">
            <div class="my-account-content account-wishlist">
              <div class="grid-layout wrapper-shop" data-grid="grid-3">
                <div class="card-product">
                  <div class="card-product-wrapper">
                    <a href="product-detail.html" class="product-img">
                      <img
                        class="lazyload img-product"
                        data-src="images/products/white-3.jpg"
                        src="images/products/white-3.jpg"
                        alt="image-product"
                      />
                      <img
                        class="lazyload img-hover"
                        data-src="images/products/white-4.jpg"
                        src="images/products/white-4.jpg"
                        alt="image-product"
                      />
                    </a>
                    <div class="list-product-btn absolute-2">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        class="box-icon bg_white quick-add tf-btn-loading"
                      >
                        <span class="icon icon-bag"></span>
                        <span class="tooltip">Add to cart</span>
                      </a>
                      <a
                        href="javascript:void(0);"
                        class="box-icon bg_white wishlist btn-icon-action"
                      >
                        <span class="icon icon-heart"></span>
                        <span class="tooltip">Add to Wishlist</span>
                        <span class="icon icon-delete"></span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        class="box-icon bg_white compare btn-icon-action"
                      >
                        <span class="icon icon-compare"></span>
                        <span class="tooltip">Add to Compare</span>
                        <span class="icon icon-check"></span>
                      </a>
                      <a
                        href="#quick_view"
                        data-bs-toggle="modal"
                        class="box-icon bg_white quickview tf-btn-loading"
                      >
                        <span class="icon icon-view"></span>
                        <span class="tooltip">Quick View</span>
                      </a>
                    </div>
                  </div>
                  <div class="card-product-info">
                    <a href="product-detail.html" class="title link">
                      Oversized Printed T-shirt
                    </a>
                    <span class="price">$10.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
