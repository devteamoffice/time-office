import ProductAdd from "../components/Products/ProductAdd";
import Attributes from "../pages/Attributes/Attributes";
import AttributesAdd from "../pages/Attributes/AttributesAdd";
import Login from "../pages/Auth/Login";
import CategoryAdd from "../pages/Category/CategoryAdd";
import CategoryList from "../pages/Category/CategoryList";
import Coupons from "../pages/Coupons/Coupons";
import CouponsAdd from "../pages/Coupons/CouponsAdd";
import CustomerDetails from "../pages/Customers/CustomerDetails";
import Customers from "../pages/Customers/Customers";
import Dashboard from "../pages/Dashboard";
import OrderInvoice from "../pages/Order/OrderInvoice";
import OrderList from "../pages/Order/OrderList";
import OrderReturns from "../pages/Order/OrderReturns";
import ProductList from "../pages/Product/ProductList";
import Warehouse from "../pages/Product/Warehouse";
import Roles from "../pages/Roles/Roles";
import RolesAdd from "../pages/Roles/RolesAdd";

export const publicRoutes = [
  { path: "/", element: Dashboard },
  { path: "/product/list", element: ProductList },
  { path: "/product/add", element: ProductAdd },
  { path: "product/warehouse", element: Warehouse },
  { path: "/category/list", element: CategoryList },
  { path: "/category/add", element: CategoryAdd },
  { path: "/orders/list", element: OrderList },
  { path: "/orders/invoices", element: OrderInvoice },
  { path: "/orders/returns", element: OrderReturns },
  { path: "/attributes/list", element: Attributes },
  { path: "/attributes/add", element: AttributesAdd },
  { path: "/coupons/list", element: Coupons },
  { path: "/coupons/add", element: CouponsAdd },
  { path: "/role/list", element: Roles },
  { path: "/role/add", element: RolesAdd },
  { path: "/customer/list", element: Customers },
  { path: "/customer/:id", element: CustomerDetails },
  { path: "/login", element: Login },
];

export const extraRoutes = [
  { path: "/reviews" },
  { path: "/u/:id" },
  { path: "/settings" },
  { path: "/blogs/list" },
  { path: "/blogs/add" },
];
