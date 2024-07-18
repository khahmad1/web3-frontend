import React from "react";
import TableData from "../components/Table";

export default function Admin() {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 280,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 280,
      editable: true,
    },

    { field: "created_at", headerName: "Created At", width: 200 },
    { field: "updated_at", headerName: "Updated At", width: 200 },
  ];
  return (
    <div className="my-16 mx-8 overflow-scroll">
      <TableData title={"Messages"} columns={columns} url={"support"} />
    </div>
  );
}
