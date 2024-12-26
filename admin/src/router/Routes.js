import ProfileWrapper from "../components/Profile/ProfileWrapper";
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
import Profile from "../pages/Profile/Profile";
import ReviewList from "../pages/Reviews/ReviewList";
import Roles from "../pages/Roles/Roles";
import RolesAdd from "../pages/Roles/RolesAdd";
import SubCategoryAdd from "../pages/SubCategory/SubCategoryAdd";
import SubCategoryEdit from "../pages/SubCategory/SubCategoryEdit";
import SubCategoryList from "../pages/SubCategory/SubCategoryList";
export const publicRoutes = [
  { path: "/", element: Dashboard, name: "Dashboard" },
  { path: "/product/list", element: ProductList, name: "Product List" },
  { path: "/product/add", element: ProductsAdd, name: "Add Product" },
  { path: "/product/:id/edit", element: ProductEdit, name: "Edit Product" },
  { path: "/product/warehouse", element: Warehouse, name: "Warehouse" },
  { path: "/category/list", element: CategoryList, name: "Category List" },
  {
    path: "/subcategory/add",
    element: SubCategoryAdd,
    name: "Add Subcategory",
  },
  {
    path: "/subcategory/list",
    element: SubCategoryList,
    name: "Subcategory List",
  },
  {
    path: "/subcategory/:id/edit",
    element: SubCategoryEdit,
    name: "Edit Subcategory",
  },
  { path: "/category/add", element: CategoryAdd, name: "Add Category" },
  { path: "/orders/list", element: OrderList, name: "Order List" },
  { path: "/orders/invoices", element: OrderInvoice, name: "Order Invoice" },
  { path: "/orders/returns", element: OrderReturns, name: "Order Returns" },
  { path: "/attributes/list", element: Attributes, name: "Attributes List" },
  { path: "/attributes/add", element: AttributesAdd, name: "Add Attribute" },
  { path: "/coupons/list", element: Coupons, name: "Coupons List" },
  { path: "/coupons/add", element: CouponsAdd, name: "Add Coupon" },
  { path: "/role/list", element: Roles, name: "Roles List" },
  { path: "/role/add", element: RolesAdd, name: "Add Role" },
  { path: "/customer/list", element: Customers, name: "Customer List" },
  { path: "/customer/:id", element: CustomerDetails, name: "Customer Details" },
  { path: "/login", element: Login, name: "Login" },
  { path: "/u/:id", element: Profile, name: "User Profile" },
  { path: "/reviews/list", element: ReviewList, name: "Reviews" },
];
