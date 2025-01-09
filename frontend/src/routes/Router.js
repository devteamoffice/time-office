import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";

const Router = () => {
  const renderRoutes = (routes) => {
    return routes.map(({ path, element }, index) => (
      <Route key={index} path={path} element={element} />
    ));
  };

  return (
    <Routes>
      {renderRoutes(publicRoutes)}
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Router;
