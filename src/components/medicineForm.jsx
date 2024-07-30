import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { URL_SERVER } from "../constant";
import { Edit } from "@mui/icons-material";

function MedicineForm(props) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [company, setCompany] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [typeData, setTypeData] = useState([{}]);
  const [companyData, setCompanyData] = useState([]);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [expiration_date, setExpiration_date] = useState("");

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
    
      const formData = new FormData();
      formData.append("name", name);
      formData.append("quantity", quantity);
      formData.append("price", price);
      formData.append("category_id", category);
      formData.append("type_id", type);
      formData.append("company_id", company);
      formData.append("image", image);
      formData.append("expiration_date", expiration_date);

      const response = await axios.post(
        `${URL_SERVER}medicine/${props.method}`,
        formData
      );

      toast.success(`${props.title} Successful`);
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error("Error Please Try Again");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL_SERVER}type`);
        setTypeData(response.data);
      } catch (error) {
        console.error("Error fetching  data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL_SERVER}category`);
        setCategoryData(response.data);
      } catch (error) {
        console.error("Error fetching  data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL_SERVER}company`);
        setCompanyData(response.data);
      } catch (error) {
        console.error("Error fetching  data:", error);
      }
    };

    fetchData();
  }, []);
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
        <div>
          {props.isEdit ? (
            <Edit />
          ) : (
            <>
              <AddCircleOutlineIcon />
              {props.title}
            </>
          )}
        </div>
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
                id="image"
                label="image"
                type="file"
                fullWidth
                name="image"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <TextField
                margin="normal"
                id="quantity"
                label="quantity"
                type="quantity"
                fullWidth
                name="quantity"
                required
                variant="outlined"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <TextField
                margin="normal"
                id="price"
                label="price"
                type="text"
                fullWidth
                name="price"
                required
                variant="outlined"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <FormControl margin="normal" variant="outlined" fullWidth>
                <InputLabel id="category-select-label">
                  {" "}
                  Select A Category
                </InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  sx={{ width: "100%" }}
                  className="outline-none"
                  label="Select A Category"
                >
                  {categoryData?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl margin="normal" variant="outlined" fullWidth>
                <InputLabel id="category-select-label">
                  {" "}
                  Select a Type
                </InputLabel>
                <Select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  sx={{ width: "100%" }}
                  className="outline-none"
                  label="Select A Type"
                >
                  {typeData?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              {" "}
              <FormControl margin="normal" variant="outlined" fullWidth>
                <InputLabel id="category-select-label">
                  Select a Company
                </InputLabel>
                <Select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  sx={{ width: "100%" }}
                  className="outline-none"
                  label="Select a Company"
                >
                  {companyData?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                margin="normal"
                id="expiration_date"
                label="expiration_date"
                type="text"
                fullWidth
                name="expiration_date"
                required
                variant="outlined"
                onChange={(e) => setExpiration_date(e.target.value)}
              />
            </Box>
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

export default MedicineForm;
