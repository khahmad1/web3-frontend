import React from "react";
import TableData from "../components/Table";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GradingIcon from "@mui/icons-material/Grading";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Admin from "./Admin";
import Facility from "./Facility";
import OrderDetails from "../components/orderDetails";
import Order from "./Order";
export default function Dashboard() {
  const card = [
    {
      name: "Admin",
      count: 10,
      icon: (
        <SupervisorAccountIcon
          style={{ width: "3rem", height: "3rem" }}
          className="bg-white text-primary p-2 w-32 h-32 rounded-full "
        />
      ),
    },
    {
      name: "Facilities",
      count: 10,
      icon: (
        <MedicalServicesIcon
          style={{ width: "3rem", height: "3rem" }}
          className="bg-white text-primary p-2 w-32 h-32 rounded-full "
        />
      ),
    },
    {
      name: "Orders",
      count: 10,
      icon: (
        <GradingIcon
          style={{ width: "3rem", height: "3rem" }}
          className="bg-white text-primary p-2 w-32 h-32 rounded-full "
        />
      ),
    },
    {
      name: "Medicines",
      count: 10,
      icon: (
        <GradingIcon
          style={{ width: "3rem", height: "3rem" }}
          className="bg-white text-primary p-2 w-32 h-32 rounded-full "
        />
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-10 my-16 mx-8 w-full ">
      <div className="flex w-full  justify-around gap-4">
        {card.map((card, index) => (
          <div className=" bg-gradient-to-r border-l-[5px] border-white from-secondary to-primary rounded-lg shadow-md flex-col w-[25%]  gap-6  p-4">
            <div className="flex flex-row items-center  justify-around gap-4">
              <div>{card.icon}</div>
              <p
                className=" text-white  flex-1 font-semibold text-3xl   py-5 "
                key={index}
              >
                {card.name}
              </p>
            </div>

            <p className="text-3xl font-bold ml-5 text-white">{card.count}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <Admin />
        </div>
        <div className="col-span-1">
          <Order />
        </div>
      </div>
    </div>
  );
}
