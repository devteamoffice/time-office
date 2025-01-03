import { combineReducers } from "redux";
// import homepageReducer from "./containers/Homepage/reducer";
import signupReducer from "./containers/Signup/reducer";
import loginReducer from "./containers/Login/reducer";
import forgotPasswordReducer from "./containers/ForgotPassword/reducer";
import navigationReducer from "./containers/Navigation/reducer";
import authenticationReducer from "./containers/Authentication/reducer";
import cartReducer from "./containers/Cart/reducer";
import newsletterReducer from "./containers/Newsletter/reducer";
import dashboardReducer from "./containers/Dashboard/reducer";
import accountReducer from "./containers/Account/reducer";
import addressReducer from "./containers/Address/reducer";
import resetPasswordReducer from "./containers/ResetPassword/reducer";
import usersReducer from "./containers/Users/reducer";
import productReducer from "./containers/Product/reducer";
import categoryReducer from "./containers/Category/reducer";
import brandReducer from "./containers/Brand/reducer";
import navigationMenuReducer from "./containers/NavigationMenu/reducer";
import shopReducer from "./containers/Shop/reducer";
import contactReducer from "./containers/Contact/reducer";
import orderReducer from "./containers/Order/reducer";
import reviewReducer from "./containers/Review/reducer";
import wishlistReducer from "./containers/Wishlist/reducer";
import { alertReducer } from "./containers/Alert/reducer";
// Create your root reducer without `connected-react-router`
const createReducer = () =>
  combineReducers({
    // homepage: homepageReducer,
    signup: signupReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    navigation: navigationReducer,
    authentication: authenticationReducer,
    cart: cartReducer,
    newsletter: newsletterReducer,
    dashboard: dashboardReducer,
    account: accountReducer,
    address: addressReducer,
    resetPassword: resetPasswordReducer,
    users: usersReducer,
    product: productReducer,
    category: categoryReducer,
    brand: brandReducer,
    menu: navigationMenuReducer,
    shop: shopReducer,
    // merchant: merchantReducer,
    contact: contactReducer,
    order: orderReducer,
    review: reviewReducer,
    wishlist: wishlistReducer,
    alert: alertReducer,
  });

export default createReducer;
