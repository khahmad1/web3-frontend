import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CustomerLayout() {
  return (
    <div className="">
      <Navbar />
      {/* <div className="layout"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default CustomerLayout;
