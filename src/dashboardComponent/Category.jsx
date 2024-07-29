import React from "react";
import TableData from "../components/Table";
import Form from "../components/modalForm";
import DeleteComponent from "../components/deleteComponent";

export default function Category() {
  const columns = [
    {
      field: "name",
      headerName: "Name",
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
          title={"Edit Category"}
          url={`category/update/${params.id}`}
          isCategory
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
          url={`category/delete/${params.id}`}
          title={"Category"}
        />
      ),
    },
  ];
  return (
    <div className="my-16 mx-8 overflow-scroll">
      <TableData
        add={<Form title={"Add category"} url={"category/create"} isCategory />}
        title={"Category"}
        columns={columns}
        url={"category"}
      />
    </div>
  );
}
