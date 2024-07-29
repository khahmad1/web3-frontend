import React from "react";
import TableData from "../components/Table";
import DeleteComponent from "../components/deleteComponent";

export default function Admin() {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 280,
   
    },
    {
      field: "email",
      headerName: "Email",
      width: 280,
   
    },

    { field: "created_at", headerName: "Created At", width: 200 },
    { field: "updated_at", headerName: "Updated At", width: 200 },
    {
      field: "delete",
      headerName: "Delete",
      width: 200,
      renderCell: (params) => (
        <DeleteComponent
          id={params.row._id}
          url={`support/delete/${params.id}`}
          title={"Support"}
        />
      ),
    },
  ];
  return (
    <div className="my-16 mx-8 overflow-scroll">
      <TableData title={"Messages"} columns={columns} url={"support "} />
    </div>
  );
}
