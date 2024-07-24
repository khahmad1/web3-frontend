import React from 'react'
import TableData from '../components/Table'

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
    <div className='my-16 mx-8 overflow-scroll'><TableData columns={columns} url={"company"} title={"Company"} /></div>
  )
}
