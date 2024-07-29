import React from "react";
import TableData from "../components/Table";
import Form from "../components/modalForm";
import DeleteComponent from "../components/deleteComponent";

export default function Type() {
  const columns = [
    {
      field: "type",
      headerName: "Type",
      width: 280,
    },

    { field: "created_at", headerName: "Created At", width: 200 },
    { field: "updated_at", headerName: "Updated At", width: 200 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        <Form
          title={"Edit Type"}
          url={`type/update/${params.id}`}
          isType
          isEdit
        />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <DeleteComponent
          id={params.row._id}
          url={`type/delete/${params.id}`}
          title={"Type"}
        />
      ),
    },
  ];
  return (
    <div className="my-16 mx-8 overflow-scroll">
      <TableData
        title={"Types"}
        add={<Form title={"Add Type"} url={"type/create"} isType />}
        columns={columns}
        url={"type"}
      />
    </div>
  );
}
