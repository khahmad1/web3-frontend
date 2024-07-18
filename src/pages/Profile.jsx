import { redirect } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "../style/profile.css";
import { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "../components/button.jsx";
import { assets } from "../constant";
export default function Profile() {
  const [data, setData] = useState({});
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    setData(session.user);
  }, []);

  return (
    <div className="m-16 flex flex-col gap-5">
      <h1 className="text-4xl font-semiBold">
        Facility Name: <span className="text-primary">{data.name} </span>
      </h1>

      <div className="container ">
        <div className="flex flex-col  gap-5 items-center  border-2 border-primary p-10 ">
          <div className="profile-picture">
            <img src={`${assets}${data.logo}`} alt="logo" />
          </div>
          <h2 className="text-3xl">Your Information </h2>
          <div className="flex flex-row ">
            <HomeIcon className="profile-icon flex-1" />
            Address: <span className="data">{data.address}</span>
          </div>
          <div>
            {" "}
            <EmailIcon className="profile-icon" />
            Email: <span className="data">{data.email}</span>
          </div>
          <div>
            <LocalPhoneIcon className="profile-icon" />
            Phone: <span className="data">{data.phone}</span>{" "}
          </div>
          <h2>Requested Order</h2>

          <div className="buttons">
            <Button link="/choose-your-product" text="Get your order now" />
            <Button link="/logout" text={<LogoutIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
}
