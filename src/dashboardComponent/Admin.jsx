import React from 'react'
import TableData from '../components/Table'

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
        {
          field: "phone",
          headerName: "Phone",
          width: 280,
          editable: true,
        },
        {
          field: "is_admin",
          headerName: "Is Admin",
          width: 220,
          editable: true,
        },
        { field: 'created_at', headerName: 'Created At', width: 200 },
        { field: 'updated_at', headerName: 'Updated At', width: 200 },
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
    <div className='my-16 mx-8 overflow-scroll'><TableData title={"Admin"} columns={columns} url={"user/admins"}/></div>
  )
}
