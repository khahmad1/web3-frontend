import React from "react";
import TableData from "../components/Table";

export default function Order() {
  const columns = [
    {
      field: "message",
      headerName: "Message",
      width: 280,
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      width: 280,
    },
    {
      field: "status",
      headerName: "Status",
      width: 280,
    },
    {
      field: "user",
      headerName: "User",
      width: 280,

      renderCell: (params) => params.value.name, // Access the name property of the user object
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
    // {
    //   field: "edit",
    //   headerName: "Details",
    //   width: 100,
    //   // renderCell: (params) => (
    //   //   <EditAdmin
    //   //     id={params.row._id}
    //   //     username={params.row.username}
    //   //     email={params.row.email}
    //   //     name={params.row.full_name}
    //   //     setRows={setRows}
    //   //     url={"admin"}
    //   //   />
    //   // ),
    // },
  ];
  return (
    <div className="my-16 mx-8 overflow-scroll">
      <TableData title={"Orders"} columns={columns} url={"orders"} />
    </div>
  );
}
