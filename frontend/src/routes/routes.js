import ContactPage from "../pages/Contact";
import ComingSoon from "../pages/ComingSoon";
import Error404Page from "../pages/Error404Page";
import Error505Page from "../pages/Error505Page";
import AboutUs from "../pages/AboutUs";
import SignIn from "../pages/SignIn";
import ResetPassword from "../pages/ResetPassword";
import SignUp from "../pages/SignUp";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Faqs from "../pages/Faqs";
import Product from "../pages/Product";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Invoice from "../pages/Invoice";
import TermCondition from "../pages/TermCondition";
import CancellationRefundPolicy from "../pages/CancelationRefund";
import ShippingDelivery from "../pages/ShippingDelivery";
import MyAccount from "../component/Account/MyAccount";
import Orders from "../component/Account/Orders";
import Address from "../component/Account/Address";
import Wishlist from "../component/Account/Wishlist";
import OrderDetails from "../component/Account/OrderDetails";
import ProductDetails from "../component/Product/ProductDetails";
import BlogList from "../pages/BlogList";
import Checkout from "../pages/Checkout";
export const publicRoutes = [
  { path: "/500", element: Error505Page },
  { path: "/404", element: Error404Page },
  { path: "/comingsoon", element: ComingSoon },
  { path: "/contact", element: ContactPage },
  { path: "/aboutus", element: AboutUs },
  { path: "/signin", element: SignIn },
  { path: "/reset-password", element: ResetPassword },
  { path: "/signup", element: SignUp },
  { path: "/privacy-policy", element: PrivacyPolicy },
  { path: "/terms-and-conditions", element: TermCondition },
  { path: "/refund-policy", element: CancellationRefundPolicy },
  { path: "/shipping-policy", element: ShippingDelivery },
  { path: "/faqs", element: Faqs },
  { path: "/products", element: Product },
  { path: "/products/:id", element: ProductDetails },
  { path: "/", element: Home },
  { path: "/cart", element: Cart },
  { path: "/u/:id", element: MyAccount },
  { path: "/u/:id/orders", element: Orders },
  { path: "/u/:id/address", element: Address },
  { path: "/u/:id/wishlist", element: Wishlist },
  { path: "/u/:id/orders/:orderId", element: OrderDetails },
  { path: "/blogs", element: BlogList },
  { path: "/orders/:id/checkout", element: Checkout },
  { path: "/orders/:id/invoice", element: Invoice },
];
