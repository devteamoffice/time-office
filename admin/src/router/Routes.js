import ProductAdd from "../components/Products/ProductAdd";
import CategoryList from "../pages/CategoryList";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/ProductList";
import Warehouse from "../pages/Warehouse";

export const publicRoutes = [
  { path: "/", element: Dashboard },
  { path: "/product/list", element: ProductList },
  { path: "/product/add", element: ProductAdd },
  { path: "products/warehouse", element: Warehouse },
  { path: "/category/list", element: CategoryList },
];

export const extraRoutes = [
  { path: "/category/list" },
  { path: "/category/add" },
  { path: "/products/warehouse" },
  { path: "/orders/list" },
  { path: "/orders/returns" },
  { path: "/attributes/list" },
  { path: "/attributes/add" },
  { path: "/orders/invoices" },
  { path: "/role/list" },
  { path: "/role/add" },
  { path: "/customer/list" },
  { path: "/coupons/list" },
  { path: "/coupons/add" },
  { path: "/reviews" },
  { path: "/u/:id" },
  { path: "/settings" },
];
