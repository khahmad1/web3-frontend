import React, { useState } from "react";
import "../style/card.css";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../context";
import ButtonComponent from "./button";

function MedicineCard(props) {
  const { addToCart, cart,  } = useAppContext();
  const [quantityCart, setQuantityCart]=useState(1)

  const handleAddToCart = () => {
    addToCart(props.id, quantityCart, props.image, props.price*quantityCart,props.name);
    toast.success(`${props.name} added to cart!`);
  };

  const handleIncrement = () => {
    if (quantityCart < props.quantity) {
      setQuantityCart(quantityCart + 1);
    }
  };

  const handleDecrement = () => {
    if (quantityCart > 1) {
      setQuantityCart(quantityCart - 1);
    }
  };

  return (
    <div className="card">
      <figure>
        <img src={props.image} alt={"image"} />
      </figure>
      <section className="details !py-5">
        <div className="min-details">
          <h1 className="cart-name font-semibold text-xl">
            {props.name}
            <span className="font-semibold">{props.company}</span>
          </h1>
          <h1 className="price font-semibold">{props.price}$</h1>
        </div>
        <div className="flex flex-col gap-5 my-5">
          <div className="flex flex-col gap-5">
            <p className="text-bas font-semibold">
              Expiration Date: {props.expiration_date}
            </p>
            <p className="text-bas font-semibold">
              Origin Country: {props.country}
            </p>
            <p className="text-bas font-semibold">Type: {props.type}</p>
            <p className="text-bas font-semibold">Quantity: {props.quantity}</p>
          </div>
          <div className="flex flex-row justify-center gap-5">
            {" "}
            <div className="flex flex-row items-center justify-center gap-2 my-2">
              <button className="p-1 px-2 text-xl font-semibold bg-gray-300 rounded" onClick={handleDecrement}>-</button>
              <span>{quantityCart}</span>
              <button className="p-1 px-2 tex-xl font-semibold bg-gray-300 rounded" onClick={handleIncrement}>+</button>
            </div>
            <ButtonComponent
              width={175}
              text={"Add To cart"}
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MedicineCard;
