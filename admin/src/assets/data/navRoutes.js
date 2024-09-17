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
      { text: "Warehouse", link: "/products/warehouse" },
    ],
  },
  {
    title: "Category",
    icon: <FaClipboardList />,
    submenu: [
      { text: "List", link: "/category/list" },
      { text: "Create", link: "/category/add" },
    ],
  },
  {
    title: "Orders",
    icon: <FaShoppingBag />,
    submenu: [
      { text: "List", link: "/orders/list" },
      { text: "Return", link: "/orders/returns" },
      { text: "Invoice", link: "/orders/invoice" },
    ],
  },
  {
    title: "Blogs",
    icon: <FaBlog />,
    submenu: [
      { text: "List", link: "/blogs/list" },
      { text: "Create", link: "/blogs/add" },
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
    submenu: [{ text: "List", link: "/customer/list" }],
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
    title: "Other",
    items: [
      {
        text: "Reviews",
        icon: <MdReviews />,
        link: "/reviews",
      },
      {
        text: "User",
        icon: <FaUser />,
        link: "/u/:id",
      },
      {
        text: "Settings",
        icon: <FaCog />,
        link: "/settings",
      },
    ],
  },
];

export default navRoutes;
