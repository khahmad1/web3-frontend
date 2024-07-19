import React, { useState } from "react";
import { useAppContext } from "../context";
import { URL_SERVER, assets } from "../constant";
import ButtonComponent from "../components/button";
import { TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import TruckAnimation from "../components/orderAnimations";

export default function Orders() {
  const [loading, setLoading] = useState();
  const { cart, setCart } = useAppContext();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [message, setMessage] = useState(" ");
  const session = JSON.parse(localStorage.getItem("session"));
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create the order
      const response = await axios.post(`${URL_SERVER}order/create`, {
        facility_id: session?.user.id,
        totalPrice: totalPrice,
        message: message,
        status: "pending",
      });

      const orderId = response.data.message.id;
      console.log(orderId, response.data);
      if (orderId) {
        const orderLinePromises = cart.map((item) => {
          return axios.post(`${URL_SERVER}orderline/create`, {
            price: item.price,
            quantity: item.quantity,
            medicine_id: item.medicineId,
            order_id: orderId,
          });
        });

        await Promise.all(orderLinePromises);
      }
      setCart([]);
    } catch (error) {
      console.log(error);
      toast.error("Please Try Again");
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };
  console.log(cart.length == 0)
  if(cart.length == 0) 
  return (<TruckAnimation/>)
  return (
    <div className="my-24 mx-80 flex  flex-row  gap-5 ">
      <div className="w-[60%] grid grid-rows-1 gap-5">
        {cart?.map((item, index) => (
          <div
            key={index}
            className=" flex flex-row gap-5 bg-gray-200 shadow-md rounded-lg"
          >
            <img
              className="p-5 rounded-md"
              src={`${item?.image}`}
              width={250}
            />
            <div className="flex flex-col self-center gap-5">
              <p className="text-xl font-semibold">Name :{item?.name}</p>
              <p className="text-xl font-semibold">
                {" "}
                Quantity: {item?.quantity}
              </p>
              <p className="text-xl font-semibold"> Price: {item?.price} $</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" w-[40%] flex flex-col  self-start gap-5 p-5 rounded-lg shadow-md bg-accent">
        <p className="text-xl font-semibold">
          Estimated Total: ${totalPrice.toFixed(2)}
        </p>
        <p className="text-xl font-semibold">
          {" "}
          Total Price: ${totalPrice.toFixed(2)}
        </p>
        <TextField
          margin="normal"
          fullWidth
          label="Order Message"
          name="message"
          autoComplete="message"
          autoFocus
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex flex-col  gap-5">
          <ButtonComponent
            onClick={handleOrderSubmit}
            width={250}
            text={"Get Your Order"}
          />
          <ButtonComponent
            link={"choose-your-product "}
            width={250}
            text={"continue shopping"}
          />
        </div>
      </div>
    </div>
  );
}
