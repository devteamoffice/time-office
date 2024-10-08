import React from "react";

const AccountNav = () => {
  return (
    <div class="col-lg-3">
      <ul class="my-account-nav">
        <li>
          <span class="my-account-nav-item active">Dashboard</span>
        </li>
        <li>
          <a href="/u/:id/orders" class="my-account-nav-item">
            Orders
          </a>
        </li>
        <li>
          <a href="/u/:id/address" class="my-account-nav-item">
            Address
          </a>
        </li>
        <li>
          <a href="/u/:id" class="my-account-nav-item">
            Account Details
          </a>
        </li>
        <li>
          <a href="/u/:id/wishlist" class="my-account-nav-item">
            Wishlist
          </a>
        </li>
        <li>
          <a href="#" class="my-account-nav-item">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountNav;
