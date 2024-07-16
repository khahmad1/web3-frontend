import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export default function ButtonComponent(props) {
  return (
    <>
    <Link className="" to={props.link}>
    <Button
      sx={{
        backgroundColor: "var(--primary)",
        fontSize: "16px",
        height: "45px",
        width: 125,
        color: "#fff",
        border: "1px solid var(--primary)",
        "&:hover": {
          color: "var(--primary)",
          cursor: "pointer",
          transform: "scale(1)",
          transition: "0.2s ease-out",
        },
      }}
    >
   {props.text}
    </Button>
    </Link>
    </>
  )
}

