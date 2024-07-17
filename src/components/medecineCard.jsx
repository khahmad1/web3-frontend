import React, { useEffect, useState } from "react";
import "../style/card.css";
import { Button } from "@mui/material";
import axios from "axios";
import imgExample from "../assets/medicine.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./loader";
// import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./button";

function MedicineCard(props) {
  return (
    <div className="card">
      <figure>
        <img src={props.image} alt={"image"} />
      </figure>
      <section className="details !py-5">
        <div className="min-details ">
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
          <div className="flex flex-row justify-center">
            <ButtonComponent width={175} text={"Add To cart"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MedicineCard;
