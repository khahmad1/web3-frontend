import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";
import "tailwindcss/tailwind.css";
import { URL_SERVER, assets } from "../constant";

export default function OrderDetails(props) {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${URL_SERVER}orderline/order/${props.id}`
        );
        console.log(response.data);
        setOrderDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [props.id]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        startIcon={
          <InfoIcon
            style={{ width: "2rem", height: "2rem" }}
            className="text-primary"
          />
        }
      ></Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="order-details-modal"
        aria-describedby="modal-to-display-order-details"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <ul>
                {orderDetails.map((item, index) => (
                  <div key={index} className="flex flex-row gap-5">
                    <img src={`${assets}${item.medicine.image}`} width={100} height={100}  className=" rounded-lg border-b border-gray-200 py-2"/>
                    <li className="border-b border-gray-200 py-2">
                      <p>
                        <strong>Name:</strong> {item.medicine.name}
                      </p>
                      <p>
                        <strong>Quantity:</strong> {item.orderLine.quantity}
                      </p>
                      <p>
                        <strong>Price:</strong> ${item.orderLine.price}
                      </p>
                    </li>
                  </div>
                ))}
              </ul>
            )}
            <button
              onClick={handleClose}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
