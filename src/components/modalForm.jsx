import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// import { Sheet } from "@mui/joy";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { URL_SERVER } from "../constant";
import { Edit } from "@mui/icons-material";

function Form(props) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [type, setType] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    try {
      const data = {};

      if (props.isCategory || props.isCompany) {
        data.name = name;
      }
      if (props.isCompany) {
        data.country = country;
      }
      if (props.isType) {
        data.type = type;
      }

      const response = await axios.post(`${URL_SERVER}${props.url}`, data);

      if (response.data) toast.success(` ${props.title} Successfully!`);
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error("Error, Please try Again");
    }
  };
  const styles = props.isEdit
    ? {
        fontSize: "12px",
        color: "var(--primary)",
        "&:hover": {
          color: "#fff",
          cursor: "pointer",
          transform: "scale(1)",
          backgroundColor: "var(--primary)",
          transition: "0.2s ease-out",
        },
      }
    : {
        backgroundColor: "var(--primary)",
        fontSize: "12px",
        color: "#fff",
        "&:hover": {
          color: "var(--primary)",
          cursor: "pointer",
          transform: "scale(1)",
          transition: "0.2s ease-out",
        },
      };




  return (
    <section className="addForm">
      {/* <Sheet> */}
      <Button sx={styles} onClick={handleClickOpen}>
        {props.isEdit ? <Edit /> : <AddCircleOutlineIcon />}
        {props.isEdit ? "" : props.title}
      </Button>
      {/* </Sheet> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "var(--primary)", color: "white" }}>
          {props.title}
        </DialogTitle>
        <DialogContent>
          <form>
            {(props.isCategory || props.isCompany) && (
              <TextField
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                name="name"
                required
                sx={{ marginBottom: "1rem" }}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            {props.isCompany && (
              <TextField
                margin="dense"
                id="name"
                label="Country"
                type="text"
                fullWidth
                name="country"
                required
                sx={{ marginBottom: "1rem" }}
                onChange={(e) => setCountry(e.target.value)}
              />
            )}
            {props.isType && (
              <TextField
                margin="dense"
                id="Type"
                label="Type"
                type="text"
                fullWidth
                name="type"
                required
                sx={{ marginBottom: "1rem" }}
                onChange={(e) => setType(e.target.value)}
              />
            )}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}

export default Form;
