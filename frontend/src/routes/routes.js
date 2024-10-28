import ContactPage from "../pages/General/Contact";
import ComingSoon from "../pages/General/ComingSoon";
import Error404Page from "../pages/General/Error404Page";
import Error505Page from "../pages/General/Error505Page";
import AboutUs from "../pages/General/AboutUs";
import SignIn from "../pages/Auth/SignIn";
import ResetPassword from "../pages/Auth/ResetPassword";
import SignUp from "../pages/Auth/SignUp";
import PrivacyPolicy from "../pages/General/PrivacyPolicy";
import Faqs from "../pages/General/Faqs";
import Product from "../pages/General/Product";
import Home from "../pages/General/Home";
import Cart from "../pages/General/Cart";
import Invoice from "../pages/Invoice";
import TermCondition from "../pages/General/TermCondition";
import CancellationRefundPolicy from "../pages/General/CancelationRefund";
import ShippingDelivery from "../pages/General/ShippingDelivery";
import MyAccount from "../component/Account/MyAccount";
import Orders from "../component/Account/Orders";
import Address from "../component/Account/Address";
import Wishlist from "../containers/WishList";
import OrderDetails from "../pages/OrderDetail";
import ProductDetails from "../pages/ProductDetails";
import Blogs from "../pages/General/Blogs";
import Checkout from "../pages/Checkout";
import PaymetFailure from "../pages/PaymetFailure";
import Account from "../pages/Account";
import PaymentConfirmation from "../pages/PaymentConfirmation";
import Pricing from "../pages/General/Pricing";
export const publicRoutes = [
  // Error Pages
  { path: "/500", element: Error505Page },
  { path: "/404", element: Error404Page },
  { path: "/comingsoon", element: ComingSoon },

  // User Authentication
  { path: "/signin", element: SignIn },
  { path: "/reset-password", element: ResetPassword },
  { path: "/signup", element: SignUp },

  // Policies
  { path: "/privacy-policy", element: PrivacyPolicy },
  { path: "/terms-and-conditions", element: TermCondition },
  { path: "/refund-policy", element: CancellationRefundPolicy },
  { path: "/shipping-policy", element: ShippingDelivery },

  // Product Pages
  { path: "/store", element: Product },
  { path: "/product/:id", element: ProductDetails },
  { path: "/orders/:id", element: OrderDetails },
  { path: "/order/:id/checkout", element: Checkout },
  { path: "/order/:id/invoice", element: Invoice },
  { path: "/order/:id/payment=confirmation", element: PaymentConfirmation },
  { path: "/order/:id/payment=failure", element: PaymetFailure },

  // User Account
  { path: "/u/:id", element: Account },
  { path: "/u/:id/orders", element: Orders },
  { path: "/u/:id/orders/:orderId", element: OrderDetails },
  { path: "/u/:id/address", element: Address },
  // { path: "/u/:id/wishlist", element: Wishlist },

  // General Pages
  { path: "/", element: Home },
  { path: "/contact", element: ContactPage },
  { path: "/aboutus", element: AboutUs },
  { path: "/blogs", element: Blogs },
  { path: "/cart", element: Cart },
  { path: "/faqs", element: Faqs },
  { path: "/pricing", element: Pricing },
];
