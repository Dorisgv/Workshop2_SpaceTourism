import React from "react";
import Navbars from "../destination/Navbars";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Navbars />
      <Outlet />
    </div>
  );
};

export default Layout;
