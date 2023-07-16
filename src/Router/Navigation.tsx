import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import Layout from "./Layout";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((el) => {
          return (
            <Route path={el.path} element={<el.component />} key={el.path} />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Navigation;
