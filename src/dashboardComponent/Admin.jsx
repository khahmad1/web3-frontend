import React from "react";
import TableData from "../components/Table";
import UserForm from "../components/UserForm";
import DeleteComponent from "../components/deleteComponent";
import { assets } from "../constant";

export default function Admin() {
  const columns = [
    {
      field: "logo",
      headerName: "Logo",
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
      width: 280,
    },
    {
      field: "email",
      headerName: "Email",
      width: 280,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 280,
    },
    {
      field: "is_admin",
      headerName: "Is Admin",
      width: 220,
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
      renderCell: (params) => (
        <UserForm
          id={params.row._id}
          method={`update/${params.row.id}`}
          isAdmin
          title={"Edit Admin"}
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
          url={`user/delete/${params.id}`}
          title={"Facility"}
        />
      ),
    },
  ];
  return (
    <div className="my-16 mx-8 overflow-scroll">
      <TableData
        add={<UserForm title={"Add New Admin"} method={"register"} isAdmin />}
        title={"Admin"}
        columns={columns}
        url={"user/admins"}
      />
    </div>
  );
}
