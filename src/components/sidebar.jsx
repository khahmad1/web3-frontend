import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/sideBar.css";

import VaccinesIcon from "@mui/icons-material/Vaccines";
import CommentIcon from "@mui/icons-material/Comment";
import CategoryIcon from "@mui/icons-material/Category";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import WorkIcon from "@mui/icons-material/Work";
import logo from "../assets/logoWhite.png";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import { DashboardCustomize, SupervisedUserCircleSharp, TypeSpecimen, VerifiedUserSharp } from "@mui/icons-material";

function SideBar() {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

    const handleLogout = () => {
      localStorage.removeItem("session");
      window.location.reload()
    };

  const [showLogoutText, setShowLogoutText] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (mq) => {
      setShowLogoutText(!mq.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    setShowLogoutText(!mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <nav className="sidebar">
      <Link to="/">
        {" "}
        <img
          src={logo}
          alt="logo"
          width={180}
          height={200}
          className="logo-expand"
        />
      </Link>

      <main className="side-wrapper">
        <section className="side-menu">
          <Link
            className={`sidebar-link discover ${
              activeLink === "dashboard" ? "is-active" : ""
            }`}
            to="dashboard"
            onClick={() => handleLinkClick("dashboard")}
          >
            <div>
              {" "}
              <DashboardCustomize style={{ width: "1.5em", height: "1.5em" }} />
            </div>

            <span className="media">Dashboard</span>
          </Link>
          <Link
            className={`sidebar-link trending ${
              activeLink === "admin" ? "is-active" : ""
            }`}
            to="admin"
            onClick={() => handleLinkClick("admin")}
          >
           <div>
            <SupervisedUserCircleSharp style={{ width: "1.5em", height: "1.5em" }}/>
           </div>
            <span className="media">Admin</span>
          </Link>
          <Link
            className={`sidebar-link ${
              activeLink === "facility" ? "is-active" : ""
            }`}
            to="facility"
            onClick={() => handleLinkClick("facility")}
          >
            <div fill="currentColor">
              <WorkIcon style={{ width: "1.5em", height: "1.5em" }} />
            </div>
            <span className="media">Facility</span>
          </Link>
          <Link
            className={`sidebar-link ${
              activeLink === "order" ? "is-active" : ""
            }`}
            to="order"
            onClick={() => handleLinkClick("order")}
          >
            <div fill="currentColor">
              <FactCheckIcon style={{ width: "1.5em", height: "1.5em" }} />
            </div>
            <span className="media">Order</span>
          </Link>
          <Link
            className={`sidebar-link ${
              activeLink === "category" ? "is-active" : ""
            }`}
            to="category"
            onClick={() => handleLinkClick("category")}
          >
            <div fill="currentColor">
              <CategoryIcon style={{ width: "1.5em", height: "1.5em" }} />
            </div>
            <span className="media">Category</span>
          </Link>
          <Link
            className={`sidebar-link ${
              activeLink === "comapany" ? "is-active" : ""
            }`}
            to="company"
            onClick={() => handleLinkClick("company")}
          >
            <div fill="currentColor">
              <WorkIcon style={{ width: "1.5em", height: "1.5em" }} />
            </div>
            <span className="media">Company</span>
          </Link>
          <Link
            className={`sidebar-link ${
              activeLink === "type" ? "is-active" : ""
            }`}
            to="type"
            onClick={() => handleLinkClick("type")}
          >
            <div fill="currentColor">
              <TypeSpecimen style={{ width: "1.5em", height: "1.5em" }} />
            </div>
            <span className="media">Type</span>
          </Link>
          <Link
            className={`sidebar-link ${
              activeLink === "medicine" ? "is-active" : ""
            }`}
            to="medicine"
            onClick={() => handleLinkClick("medicine")}
          >
            <div fill="currentColor">
              <VaccinesIcon style={{ width: "1.5em", height: "1.5em" }} />
            </div>
            <span className="media">Medicine</span>
          </Link>

          <Link
            className={`sidebar-link ${
              activeLink === "message" ? "is-active" : ""
            }`}
            to="message"
            onClick={() => handleLinkClick("message")}
          >
            <div fill="currentColor">
              <CommentIcon style={{ width: "1.5em", height: "1.5em" }} />
            </div>
            <span className="media">Message</span>
          </Link>
        </section>
      </main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <LogoutIcon
          style={{
            color: "#fff",
            marginLeft: "0.7em",
            display: "inline",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        />
        {showLogoutText && (
          <span
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: "1em",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            Logout
          </span>
        )}
      </div>
    </nav>
  );
}

export default SideBar;
