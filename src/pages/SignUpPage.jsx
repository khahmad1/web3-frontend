import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../style/auth.css";
import img from "../assets/Hero2.png";
import axios from "axios";
// import Cookies from "js-cookie";
// import userContext from "../context/userContext";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Loader from "../components/loader";
import { URL_SERVER } from "../constant";

const theme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const returnTo = queryParams.get("returnTo");
  console.log(returnTo)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("logo", logo);
      formData.append("address", address);

      const response = await axios.post(`${URL_SERVER}user/register`, formData);

      const sessionData = {
        user: response?.data.user,
        userToken: response?.data.authorisation?.token,
      };

      localStorage.setItem("session", JSON.stringify(sessionData));
      toast.success("SignUp successful");
      if (returnTo) {
        navigate(`/${returnTo}`);
      } else if (response?.data?.user?.is_admin == true) {
        navigate("/admin-panel/dashboard");
      } else navigate(from);

    } catch (error) {
      console.log(error);
      toast.error("Error SignUp, Please Try Again ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signIn">
      <section className="signIn-img">
        <img src={img} alt="" width={"750px"} height={"500px"} />
      </section>
      <section className="signIn-form">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Box
              noValidate
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 2,
                float: "right",
              }}
            >
              <Avatar
                sx={{ m: 3, bgcolor: "var(--primary)", width: 75, height: 75 }}
              >
                <LockOutlinedIcon sx={{ width: 50, height: 50 }} />
              </Avatar>
              <Typography component="h1" variant="h4">
                Sign Up
              </Typography>
              <Box component="form" noValidate sx={{ alignItems: "center" }}>
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    mb: 2,
                    backgroundColor: "var(--primary)",
                    fontSize: "16px",
                    border: "1px solid var(--primary)",
                    height: "45px",
                    color: "#fff",
                    "&:hover": {
                      color: "var(--primary)",
                      background: "#fff",
                      cursor: "pointer",
                      transition: "0.2s ease-out",
                    },
                  }}
                >
                  {loading ? (
                    <Loader />
                  ) : (
                    // Render the loader component when loading is true
                    "Sign Up"
                  )}
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      to="/signIn"
                      style={{
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Already have an account? Sign In
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
          <ToastContainer />
        </ThemeProvider>
      </section>
    </section>
  );
}
