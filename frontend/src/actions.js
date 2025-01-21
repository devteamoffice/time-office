/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from "redux";
import * as authentication from "./containers/Authentication/actions";

import * as signup from "./containers/Signup/actions";
import * as login from "./containers/Login/actions";
import * as forgotPassword from "./containers/ForgotPassword/actions";

import * as account from "./containers/Account/actions";
import * as address from "./containers/Address/actions";
import * as resetPassword from "./containers/ResetPassword/actions";
import * as users from "./containers/Users/actions";
import * as product from "./containers/Product/actions";
import * as category from "./containers/Category/actions";

import * as contact from "./containers/Contact/actions";

import * as review from "./containers/Review/actions";
import * as wishlist from "./containers/Wishlist/actions";

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...authentication,

      ...signup,
      ...login,
      ...forgotPassword,

      ...account,
      ...address,
      ...resetPassword,
      ...users,
      ...product,
      ...category,

      ...contact,

      ...review,
      ...wishlist,
    },
    dispatch
  );
}
