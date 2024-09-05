import ComingPage from "../component/Extras/ComingPage";
import Error404New from "../component/Extras/Error404New";
import Error505 from "../component/Extras/Error505";

export const publicRoutes = [
  { path: "/500", element: Error505 },
  { path: "/400", element: Error404New },
  { path: "comingsoon", element: ComingPage },
];

// export const adminRoutes = [
//   { path: "/admin", element: AdminWrapper },
//   { path: "/admin/tours", element: TourList },
//   { path: "/admin/comments-reviews", element: ReviewsCard },
//   { path: "/admin/tours/create", element: AddTourPackage },
//   { path: "/admin/tours/update", element: UpdateTour },
//   { path: "/admin/bookings", element: Bookings },
//   { path: "/admin/queries", element: Queries },
//   { path: "/admin/blogs", element: BlogPage },
//   { path: "/admin/blog/create", element: BlogCreate },
//   { path: "/admin/reviews", element: CommentsReviews },
//   { path: "/admin/users", element: UsersTable },
//   { path: "/admin/extras", element: CategoriesTags },
// ];
