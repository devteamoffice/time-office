import { combineReducers } from "redux";

import loginReducer from "./containers/Login/reducer";

import authenticationReducer from "./containers/Authentication/reducer";
import cartReducer from "./containers/Cart/reducer";
import accountReducer from "./containers/Account/reducer";

import usersReducer from "./containers/Users/reducer";
import productReducer from "./containers/Product/reducer";
import categoryReducer from "./containers/Category/reducer";
import navigationreducer from "./containers/Navigation/reducer";
import contactReducer from "./containers/Contact/reducer";
import orderReducer from "./containers/Order/reducer";

// Create your root reducer without `connected-react-router`
const createReducer = () =>
  combineReducers({
    login: loginReducer,

    authentication: authenticationReducer,
    cart: cartReducer,
    account: accountReducer,
    navigation: navigationreducer,
    users: usersReducer,
    product: productReducer,
    category: categoryReducer,

    contact: contactReducer,
    order: orderReducer,
  });

export default createReducer;
