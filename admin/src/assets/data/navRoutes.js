import {
  MdAttribution,
  MdDashboard,
  MdDoubleArrow,
  MdKey,
  MdReviews,
} from "react-icons/md";
import {
  FaTshirt,
  FaClipboardList,
  FaBox,
  FaShoppingBag,
  FaCreditCard,
  FaCog,
  FaUser,
  FaUsers,
  FaFileInvoice,
  FaBlog,
} from "react-icons/fa";
import { AiOutlineCustomerService } from "react-icons/ai";
import { RiCoupon2Fill } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";
const navRoutes = [
  {
    title: "Admin",
    items: [
      {
        text: "Dashboard",
        icon: <MdDashboard />,
        link: "/",
      },
    ],
  },
  {
    title: "Products",
    icon: <FaTshirt />,
    submenu: [
      { text: "List", link: "/product/list" },
      { text: "Create", link: "/product/add" },
      { text: "Warehouse", link: "/product/warehouse" },
      { text: "Edit", link: (id) => `/product/${id}/edit` },
    ],
  },
  {
    title: "Category",
    icon: <FaClipboardList />,
    submenu: [
      { text: "List", link: "/category/list" },
      { text: "Create", link: "/category/add" },
      { text: "Edit", link: (id) => `/category/${id}/edit` },
    ],
  },
  {
    title: "SubCategory",
    icon: <FaClipboardList />,
    submenu: [
      { text: "List", link: "/subcategory/list" },
      { text: "Create", link: "/subcategory/add" },
      { text: "Edit", link: (id) => `/subcategory/${id}/edit` },
    ],
  },
  {
    title: "Orders",
    icon: <FaShoppingBag />,
    submenu: [
      { text: "List", link: "/orders/list" },
      { text: "Returns", link: "/orders/returns" },
      { text: "Invoice", link: "/orders/invoices" },
    ],
  },
  {
    title: "Attributes",
    icon: <MdAttribution />,
    submenu: [
      { text: "List", link: "/attributes/list" },
      { text: "Create", link: "/attributes/add" },
    ],
  },
  {
    title: "Coupons",
    icon: <RiCoupon2Fill />,
    submenu: [
      { text: "List", link: "/coupons/list" },
      { text: "Add", link: "/coupons/add" },
    ],
  },
  {
    title: "Contact",
    icon: <AiOutlineContacts />,
    submenu: [{ text: "List", link: "/contact/list" }],
  },
  {
    title: "Roles",
    icon: <FaUsers />,
    submenu: [
      { text: "List", link: "/role/list" },
      { text: "Create", link: "/role/add" },
    ],
  },
  {
    title: "Customers",
    icon: <AiOutlineCustomerService />,
    submenu: [
      { text: "List", link: "/customer/list" },
      { text: "Details", link: (id) => `/customer/${id}` },
    ],
  },
  {
    title: "Reviews",
    icon: <MdReviews />,
    submenu: [
      { text: "List", link: "/reviews/list" },
      { text: "Add", link: "/reviews/add" },
    ],
  },
  {
    title: "Other",
    items: [
      {
        text: "Settings",
        icon: <FaCog />,
        link: "/settings",
      },
      {
        text: "Maintainance",
        icon: <FaFileInvoice />,
        link: "/service-maintainance",
      },
    ],
  },
];

export default navRoutes;
