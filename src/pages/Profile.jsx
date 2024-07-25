import { useNavigate, redirect } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "../style/profile.css";
import { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "../components/button.jsx";
import { assets } from "../constant";
import TableData from "../components/Table";
import OrderDetails from "../components/orderDetails";

export default function Profile() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    setData(session?.user);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("session");
  };

  const columns = [
    {
      field: "message",
      headerName: "Message",
      width: 250,
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      width: 250,
      renderCell: (params) => `$${params.value}`,
    },
    {
      field: "status",
      headerName: "Status",
      width: 250,
    },

    {
      field: "created_at",
      headerName: "Created At",
      width: 200,
      renderCell: (params) => new Date(params.value).toLocaleString(),
    },
    {
      field: "updated_at",
      headerName: "Updated At",
      width: 200,
      renderCell: (params) => new Date(params.value).toLocaleString(),
    },
    {
      field: "Order Details",
      headerName: " Order Details",
      width: 100,
      renderCell: (params) => <OrderDetails id={params.row.id}/>,
    },
 
  ];
  return (
    <div className="m-16 flex flex-col gap-5 ">
      <h1 className="text-4xl font-semiBold">
        Facility Name: <span className="text-primary">{data?.name} </span>
      </h1>

      <div className="flex flex-row gap-10 justify-between ">
        <div className="flex flex-col justify-start h-[75vh]  gap-5 items-center  border-2 border-primary p-10 ">
          <div className="profile-picture">
            <img src={`${assets}${data?.logo}`} alt="logo" />
          </div>
          <h2 className="text-3xl">Your Information </h2>
          <div className="flex flex-row ">
            <HomeIcon className="profile-icon flex-1" />
            Address: <span className="data">{data?.address}</span>
          </div>
          <div>
            {" "}
            <EmailIcon className="profile-icon" />
            Email: <span className="data">{data?.email}</span>
          </div>
          <div>
            <LocalPhoneIcon className="profile-icon" />
            Phone: <span className="data">{data?.phone}</span>{" "}
          </div>
          <h2>Requested Order</h2>

          <div className="buttons">
            <Button
              link="/choose-your-product"
              width={250}
              text="Get your order now"
            />
            <Button
              onClick={() => handleLogout()}
              width={250}
              text={<LogoutIcon />}
            />
          </div>
        </div>
        <div className="overflow-scroll h-[75vh]">
          {data?.id && (
            <TableData
              title={"Your Order"}
              columns={columns}
              url={`order/user/${data.id}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
