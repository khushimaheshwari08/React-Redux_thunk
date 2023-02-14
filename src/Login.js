import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "./redux/modules/Login/LoginAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === "DEMO@123" || password === "DEMO@123") {
      localStorage.setItem("isLogin", true);
      dispatch(loginUserAction());
      navigate("/");
    } else {
      alert("Please enter valid email or password");
    }
  };

  return (
    <Grid item md={8} sx={{ mt: 20 }}>
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "400px",
        }}
      >
        <Typography sx={{ fontWeight: "bolder", fontSize: "30px", mb: 3 }}>
          Log In To Ecommerce Website
        </Typography>
        <Typography sx={{ fontWeight: "bold", mb: 1 }}>Email</Typography>
        <TextField
          id="outlined-basic"
          placeholder="DEMO@123"
          variant="outlined"
          sx={{ mb: 3, width: "400px" }}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <Typography sx={{ display: "flex", gap: 24 }}>
          <Typography sx={{ fontWeight: "bold", mb: 1 }}>Password</Typography>
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="DEMO@123"
          variant="outlined"
          sx={{ mb: 3, width: "400px" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(98 84 243)",
            width: "100px",
            height: "40px",
          }}
          onClick={() => handleSubmit()}
        >
          Log in
        </Button>
      </Typography>
    </Grid>
  );
};

export default Login;
