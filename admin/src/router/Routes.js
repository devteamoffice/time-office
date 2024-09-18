import ProductAdd from "../components/Products/ProductAdd";
import CategoryAdd from "../pages/Category/CategoryAdd";
import CategoryList from "../pages/Category/CategoryList";
import Dashboard from "../pages/Dashboard";
import OrderInvoice from "../pages/Order/OrderInvoice";
import OrderList from "../pages/Order/OrderList";
import OrderReturns from "../pages/Order/OrderReturns";
import ProductList from "../pages/Product/ProductList";
import Warehouse from "../pages/Product/Warehouse";

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
];

export const extraRoutes = [
  { path: "/attributes/list" },
  { path: "/attributes/add" },
  { path: "/role/list" },
  { path: "/role/add" },
  { path: "/customer/list" },
  { path: "/coupons/list" },
  { path: "/coupons/add" },
  { path: "/reviews" },
  { path: "/u/:id" },
  { path: "/settings" },
  { path: "/blogs/list" },
  { path: "/blogs/add" },
];
