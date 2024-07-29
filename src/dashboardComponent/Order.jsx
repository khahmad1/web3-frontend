import React, { useState } from "react";
import TableData from "../components/Table";
import OrderDetails from "../components/orderDetails";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import { URL_SERVER } from "../constant";
import DeleteComponent from "../components/deleteComponent";

export default function Order() {
  const [status, setStatus] = useState();
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const response = await axios.post(`${URL_SERVER}order/status/${id}`, {
        status: newStatus,
      });
      toast.success("Update Status Success");
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    {
      field: "message",
      headerName: "Message",
      width: 200,
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      width: 200,
      renderCell: (params) => `${params.value} $`,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(e) => handleUpdateStatus(params.row.id, e.target.value)}
          sx={{ width: "100%" }}
          className="outline-none"
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="in progress">In Progress</MenuItem>
          <MenuItem value="in road">In Road</MenuItem>
        </Select>
        // </FormControl>
      ),
    },
    {
      field: "user_name",
      headerName: "User",
      width: 200,

      renderCell: (params) => params.row.user.name, // Access the name property of the user object
    },
    {
      field: "user_location",
      headerName: "User Location",
      width: 200,

      renderCell: (params) => params.row.user.address, 
    },
  
    {
      field: "created_at",
      headerName: "Created At",
      width: 250,
      renderCell: (params) => new Date(params.value).toLocaleString(),
    },
    {
      field: "updated_at",
      headerName: "Updated At",
      width: 250,
      renderCell: (params) => new Date(params.value).toLocaleString(),
    },

    {
      field: "Order Details",
      headerName: " Order Details",
      width: 150,
      renderCell: (params) => <OrderDetails id={params.row.id} />,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 200,
      renderCell: (params) => (
        <DeleteComponent
          id={params.row._id}
          url={`order/delete/${params.id}`}
          title={"Order"}
        />
      ),
    },
  ];
  return (
    <div className="my-16 mx-8 overflow-scroll">
      <TableData title={"Orders"} columns={columns} url={"orders"} />
    </div>
  );
}
