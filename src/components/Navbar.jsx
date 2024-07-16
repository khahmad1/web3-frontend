import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./button";
import ".././style/Navbar.css";
export default function Navbar() {
  return (
    <nav className="nav-header">
      <img className="" src={logo}  width={160} height={155}/>
      <div className="nav-links">
        <NavLink
          to="/"
          className={`
          ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
            nav-link
          `}
        >
          Home
        </NavLink>
        <NavLink
          to="/all-products"
          className={`
          ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
            nav-link
          `}
        >
          All Products
        </NavLink>
        <NavLink
          to="/contact-us"
          className={`
          ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
            nav-link
          `}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/about"
          className={`
          ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
            nav-link
          `}
        >
          About us
        </NavLink>
        <Button link="/sign-in" text="Sign In" />
        <Button link="/sign-up" text="Sign Up" />
      </div>
    </nav>
  );
}
