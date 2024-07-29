import React from "react";
import TableData from "../components/Table";
import UserForm from "../components/UserForm";

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
      <TableData
        add={<UserForm title={"Add New Admin"} method={"register"} isAdmin />}
        title={"Admin"}
        columns={columns}
        url={"user/admins"}
      />
    </div>
  );
}
