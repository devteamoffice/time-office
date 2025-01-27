// navUtils.js
export const getLink = (item, user) => {
  return typeof item.link === "function" ? item.link(user?.id) : item.link;
};

export const isRouteValid = (path, navRoutes, publicRoutes, user) => {
  const existsInNavRoutes = navRoutes.some((section) =>
    section.submenu?.some((subitem) => getLink(subitem, user) === path)
  );
  const existsInPublicRoutes = publicRoutes.some(
    (route) => route.path === path
  );
  return existsInNavRoutes || existsInPublicRoutes;
};

export const isSubmenuActive = (submenu, location, user) => {
  return submenu.some((subitem) =>
    location.pathname.startsWith(getLink(subitem, user))
  );
};
