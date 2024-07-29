import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import { URL_SERVER } from "../constant";

function UserForm(props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let is_admin = props.isAdmin ? 1 : 0;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("logo", logo);
      formData.append("address", address);
      formData.append("is_admin", is_admin);

      const response = await axios.post(
        `${URL_SERVER}user/${props.method}`,
        formData
      );

      toast.success(`${props.title} Successful`);
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error("Error Please Try Again");
    }
  };

  return (
    <section className="addForm">
      {/* <Sheet> */}
      <Button
        sx={{
          backgroundColor: "var(--primary)",
          fontSize: "12px",
          color: "#fff",
          "&:hover": {
            color: "var(--primary)",
            cursor: "pointer",
            transform: "scale(1)",
            transition: "0.2s ease-out",
          },
        }}
        onClick={handleClickOpen}
      >
        <PersonAddIcon /> {props.title}
      </Button>
      {/* </Sheet> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "var(--primary)", color: "white" }}>
         {props.title}
        </DialogTitle>
        <DialogContent>
          <form>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <TextField
                margin="normal"
                id="fullName"
                label="Full Name"
                type="text"
                fullWidth
                name="name"
                required
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                id="password"
                label="Password"
                type="password"
                fullWidth
                name="password"
                required
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="you should put your password here"
              />
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <TextField
                margin="normal"
                id="logo"
                label="logo"
                type="file"
                fullWidth
                name="logo"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setLogo(e.target.files[0])}
              />

              <TextField
                margin="normal"
                id="phone"
                label="Phone"
                type="text"
                fullWidth
                name="phone"
                required
                variant="outlined"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Box>
            <TextField
              margin="normal"
              id="email"
              label="Email"
              type="email"
              fullWidth
              name="email"
              required
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              id="address"
              label="Address"
              type="text"
              fullWidth
              name="address"
              required
              variant="outlined"
              onChange={(e) => setAddress(e.target.value)}
            />
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

export default UserForm;
