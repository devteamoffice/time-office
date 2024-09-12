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
} from "react-icons/fa";
import { AiOutlineCustomerService } from "react-icons/ai";
import { RiCoupon2Fill } from "react-icons/ri";

const navRoutes = [
  {
    title: "General",
    items: [
      {
        text: "Dashboard",
        icon: <MdDashboard />,
        link: "index.html",
      },
    ],
  },
  {
    title: "Products",
    icon: <FaTshirt />,
    submenu: [
      { text: "List", link: "product-list.html" },
      { text: "Grid", link: "product-grid.html" },
      { text: "Details", link: "product-details.html" },
      { text: "Edit", link: "product-edit.html" },
      { text: "Create", link: "product-add.html" },
    ],
  },
  {
    title: "Category",
    icon: <FaClipboardList />,
    submenu: [
      { text: "List", link: "category-list.html" },
      { text: "Edit", link: "category-edit.html" },
      { text: "Create", link: "category-add.html" },
    ],
  },
  {
    title: "Inventory",
    icon: <FaBox />,
    submenu: [
      { text: "Warehouse", link: "inventory-warehouse.html" },
      { text: "Received Orders", link: "inventory-received-orders.html" },
    ],
  },
  {
    title: "Orders",
    icon: <FaShoppingBag />,
    submenu: [
      { text: "List", link: "orders-list.html" },
      { text: "Details", link: "order-detail.html" },
      { text: "Cart", link: "order-cart.html" },
      { text: "Check Out", link: "order-checkout.html" },
    ],
  },
  {
    title: "Purchases",
    icon: <FaCreditCard />,
    submenu: [
      { text: "List", link: "purchase-list.html" },
      { text: "Order", link: "purchase-order.html" },
      { text: "Return", link: "purchase-returns.html" },
    ],
  },
  {
    title: "Attributes",
    icon: <MdAttribution />,
    submenu: [
      { text: "List", link: "attributes-list.html" },
      { text: "Edit", link: "attributes-edit.html" },
      { text: "Create", link: "attributes-add.html" },
    ],
  },
  {
    title: "Invoices",
    icon: <FaFileInvoice />,
    submenu: [
      { text: "List", link: "invoice-list.html" },
      { text: "Details", link: "invoice-details.html" },
      { text: "Create", link: "invoice-add.html" },
    ],
  },
  {
    title: "Settings",
    icon: <FaCog />,
    link: "settings.html",
  },
  {
    title: "Users",
    items: [
      {
        text: "Profile",
        icon: <FaUser />,
        link: "pages-profile.html",
      },
      {
        title: "Roles",
        icon: <FaUsers />,
        submenu: [
          { text: "List", link: "role-list.html" },
          { text: "Edit", link: "role-edit.html" },
          { text: "Create", link: "role-add.html" },
        ],
      },
      {
        text: "Permissions",
        icon: <MdKey />,
        link: "pages-permissions.html",
      },
    ],
  },
  {
    title: "Customers",
    icon: <AiOutlineCustomerService />,
    submenu: [
      { text: "List", link: "customer-list.html" },
      { text: "Details", link: "customer-detail.html" },
    ],
  },
  {
    title: "Other",
    items: [
      {
        title: "Coupons",
        icon: <RiCoupon2Fill />,
        submenu: [
          { text: "List", link: "coupons-list.html" },
          { text: "Add", link: "coupons-add.html" },
        ],
      },
      {
        text: "Reviews",
        icon: <MdReviews />,
        link: "pages-review.html",
      },
    ],
  },
];

export default navRoutes;
