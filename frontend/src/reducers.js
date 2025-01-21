import { combineReducers } from "redux";

import signupReducer from "./containers/Signup/reducer";
import loginReducer from "./containers/Login/reducer";
import forgotPasswordReducer from "./containers/ForgotPassword/reducer";

import authenticationReducer from "./containers/Authentication/reducer";

import accountReducer from "./containers/Account/reducer";
import addressReducer from "./containers/Address/reducer";
import resetPasswordReducer from "./containers/ResetPassword/reducer";
import usersReducer from "./containers/Users/reducer";
import productReducer from "./containers/Product/reducer";
import categoryReducer from "./containers/Category/reducer";

import shopReducer from "./containers/Shop/reducer";
import contactReducer from "./containers/Contact/reducer";

import reviewReducer from "./containers/Review/reducer";
import wishlistReducer from "./containers/Wishlist/reducer";

// Create your root reducer without `connected-react-router`
const createReducer = () =>
  combineReducers({
    // homepage: homepageReducer,
    signup: signupReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,

    authentication: authenticationReducer,

    account: accountReducer,
    address: addressReducer,
    resetPassword: resetPasswordReducer,
    users: usersReducer,
    product: productReducer,
    category: categoryReducer,

    shop: shopReducer,

    contact: contactReducer,

    review: reviewReducer,
    wishlist: wishlistReducer,
  });

export default createReducer;
