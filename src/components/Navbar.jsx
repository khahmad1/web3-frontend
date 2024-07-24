import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./button";
import ".././style/Navbar.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useAppContext } from "../context";
import { assets } from "../constant";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { cart } = useAppContext();
  const [userData, setUserData] = useState();
  const location = useLocation();

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    setUserData(session);
  }, [location]);

  return (
    <nav className=" h-28 flex flex-row justify-between items-center shadow-md px-16">
      <Link to={"admin-panel"}>
        <img className="" src={logo} width={160} height={155} />
      </Link>
      <div className="flex flex-row gap-5 items-center">
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
          to="/choose-your-product"
          className={`
          ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
            nav-link
          `}
        >
          All Products
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
        <NavLink
          to="/orders"
          className={({ isActive, isPending }) =>
            `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`
          }
        >
          <div className="relative p-2">
            <ShoppingCartCheckoutIcon className="" />
            {cart?.length > 0 && (
              <div className="bg-red-600 rounded-full text-white w-[20px] h-[20px] font-semibold absolute top-0 right-0 flex items-center justify-center">
                {cart.length}
              </div>
            )}
          </div>
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
        {userData?.user && userData?.userToken ? (
          <Link to="/profile">
            <img
              src={`${assets}${userData?.user.logo}`}
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        ) : (
          <>
            <Button link="/sign-in" text="Sign In" />
            <Button link="/sign-up" text="Sign Up" />
          </>
        )}
      </div>
    </nav>
  );
}
