import React from "react";
import TableData from "../components/Table";
import Form from "../components/modalForm";
import DeleteComponent from "../components/deleteComponent";

export default function Company() {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 280,
    },
    {
      field: "country",
      headerName: "Country",
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
          title={"Edit Company"}
          url={`company/update/${params.id}`}
          isCompany
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
          url={`company/delete/${params.id}`}
          title={"Company"}
        />
      ),
    },
  ];
  return (
    <div className="my-16 mx-8 overflow-scroll">
      <TableData
        add={<Form title={"Add Company"} url={"company/create"} isCompany />}
        columns={columns}
        url={"company"}
        title={"Company"}
      />
    </div>
  );
}
