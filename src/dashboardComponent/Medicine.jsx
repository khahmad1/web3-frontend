import React from "react";
import TableData from "../components/Table";
import { assets } from "../constant";

export default function Medicine() {
  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img
          className="rounded-full"
          width={40}
          height={40}
          src={`${assets}${params.value}`}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 100,
    },
    {
      field: "price",
      headerName: "price",
      width: 100,
    },
    {
      field: "quantity",
      headerName: "Phone",
      width: 100,
    },
    {
      field: "expiration_date",
      headerName: "Expiration Date",
      width: 200,
      renderCell: (params) =>
        new Date(params.value).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }), // Custom date format
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,

      renderCell: (params) => params.value.name,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,

      renderCell: (params) => params.value.type,
    },
    {
      field: "company",
      headerName: "Company",
      width: 100,

      renderCell: (params) => params.value.name,
    },
    {
      field: "company",
      headerName: "Country",
      width: 100,

      renderCell: (params) => params.value.country,
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
      field: "edit",
      headerName: "Edit",
      width: 100,
      // renderCell: (params) => (
      //   <EditAdmin
      //     id={params.row._id}
      //     username={params.row.username}
      //     email={params.row.email}
      //     name={params.row.full_name}
      //     setRows={setRows}
      //     url={"admin"}
      //   />
      // ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      // renderCell: (params) => (
      //   <DeleteComponent
      //     id={params.row._id}
      //     url={"admin"}
      //     title={"Admin"}
      //     setRows={setRows}
      //   />
      // ),
    },
  ];
  return (
    <div className="my-16 mx-8 overflow-scroll">
      <TableData name={"Medicines"} columns={columns} url={"medicine"} />
    </div>
  );
}
