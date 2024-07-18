import React from "react";
import TableData from "../components/Table";

export default function Type() {
    const columns = [
        {
          field: "type",
          headerName: "Type",
          width: 280,
          editable: true,
        },
    
        { field: "created_at", headerName: "Created At", width: 200 },
        { field: "updated_at", headerName: "Updated At", width: 200 },
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
        <TableData  title={"Types"} columns={columns} url={"type"}/>
      </div>
    
  );
}
