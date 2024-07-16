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
    <div>
      <main className="medicine">
        <div className="card">
          <figure>
            <img src={props.image} alt={"image"} />
          </figure>
          <section className="details">
            <div className="min-details">
              <h1 className="cart-name">
                {props.name}
                <span>{props.company}</span>
              </h1>
              <h1 className="price">{props.price}$</h1>
            </div>

            <div className="options">
              <h4>Expiration Date: {props.expiration_date}</h4>
              <h4>Origin Country: {props.country}</h4>
              <h4>Type: {props.type}</h4>
              <h4>Quantity: {props.quantity}</h4>
            </div>
            <ButtonComponent text={"Add To cart"} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default MedicineCard;
