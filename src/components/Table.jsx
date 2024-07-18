import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

import axios from "axios";

import Loader from "./loader";
import { URL_SERVER } from "../constant";

const CustomGridToolbar = () => {
  return (
    <GridToolbar
      sx={{
        backgroundColor: "var(--primary)",
        color: "white",
        height: 50,
      }}
    ></GridToolbar>
  );
};

const TableData = (props) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns: GridColDef[] = props.columns
  const theme = useTheme();
  const screenXs = useMediaQuery(theme.breakpoints.only("xs"));
  const screenSm = useMediaQuery(theme.breakpoints.only("sm"));
  const screenMd = useMediaQuery(theme.breakpoints.only("md"));
  const screenLg = useMediaQuery(theme.breakpoints.only("lg"));
  const screenXl = useMediaQuery(theme.breakpoints.only("xl"));

  let height = 400;
  let width = 1100;

  if (screenXs) {
    height = 200;
    width = 200;
  } else if (screenSm) {
    height = 250;
    width = 400;
  } else if (screenMd) {
    height = 300;
    width = 600;
  } else if (screenLg) {
    height = 360;
    width = 800;
  } else if (screenXl) {
    height = 360;
    width = 1100;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL_SERVER}${props.url}`);
        setRows(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching  data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
    <Loader />
  ) : (
      <React.Fragment>
        <Box
          component="h1"
          sx={{
            borderBottom: "4px solid var(--primary)",
            width: "30px",
            marginBottom: "2em",
            fontSize: "2em",
          }}
          className="!font-semibold"
        >
          {props.title}
        </Box>
        <Box>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4"></Typography>
            <div>{/* <AddAdmin setRows={setRows} /> */}</div>
          </div>
          <DataGrid
            rows={rows}
            columns={columns}
            pagination
            pageSize={5}
            getRowId={(rows) => rows.id}
            title=""
            slots={{
              toolbar: CustomGridToolbar,
            }}
            width={width}
            height={height}
          />
        </Box>
      </React.Fragment>
       )} 
    </React.Fragment>
  );
};

export default TableData;
