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
import ProductEdit from "../pages/Product/ProductEdit";
import ProductList from "../pages/Product/ProductList";
import ProductsAdd from "../pages/Product/ProductsAdd";
import Warehouse from "../pages/Product/Warehouse";
import Roles from "../pages/Roles/Roles";
import RolesAdd from "../pages/Roles/RolesAdd";
import SubCategoryAdd from "../pages/SubCategory/SubCategoryAdd";
import SubCategoryList from "../pages/SubCategory/SubCategoryList";
export const publicRoutes = [
  { path: "/", element: Dashboard },
  { path: "/product/list", element: ProductList },
  { path: "/product/add", element: ProductsAdd },
  { path: "/product/:id/edit", element: ProductEdit },
  { path: "product/warehouse", element: Warehouse },
  { path: "/category/list", element: CategoryList },
  { path: "/subcategory/add", element: SubCategoryAdd },
  { path: "/subcategory/list", element: SubCategoryList },
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
