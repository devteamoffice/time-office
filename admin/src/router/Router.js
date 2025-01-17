import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, adminRoutes } from "./Routes";
import { FutureProvider } from "../Context";

const Router = () => {
  const renderRoutes = (routes) => {
    return routes.map(({ path, element: Element }, index) => {
      if (!Element) {
        console.error(`Component for path "${path}" is not defined.`);
        return null;
      }
      return <Route key={index} path={path} element={<Element />} />;
    });
  };

  return (
    <FutureProvider>
      {/* <ScrollToTop /> */}
      <Routes>
        {renderRoutes(publicRoutes)}

        {/* {user && user.role === "admin" && renderRoutes(adminRoutes)}

        {user && user.role !== "admin" && (
          <Route path="/admin/*" element={<Navigate to="/" />} />
        )}

        {!user && <Route path="/admin/*" element={<Navigate to="/login" />} />} */}
      </Routes>
    </FutureProvider>
  );
};

export default Router;
