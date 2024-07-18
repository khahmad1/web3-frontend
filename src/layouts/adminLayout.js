import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";

function AdminLayout() {
  return (
    <div className="flex flex-row">
      <SideBar/>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
