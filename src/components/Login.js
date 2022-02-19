import React from "react";
import {
  Button,
  Container,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Grid,
  Link as MyLink,
  Alert,
} from "../Imports/imports";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

const Login = () => {
  return (
    <Box className="container">
      <h1>Login</h1>
      <TextField
        sx={{
          marginBottom: 3,
        }}
        variant="outlined"
        type="email"
        label="Email"
        fullWidth
        placeholder="example@xyz.com"
        autoComplete="email"
        required
      />
      <TextField
        sx={{
          marginBottom: 2,
        }}
        variant="outlined"
        type="password"
        label="Password"
        fullWidth
        placeholder="***********"
        required
      />
      <FormControlLabel
        sx={{
          marginBottom: 2,
          mr: 33,
        }}
        control={<Checkbox size="small" color="success" />}
        label="Remember Me"
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          marginBottom: 3,
        }}
      >
        Login
      </Button>
      <Grid container>
        <Grid
          item
          xs
          sx={{
            fontSize: 15,
          }}
        >
          <Link className="link" to="#">
            Forgot Password
          </Link>
        </Grid>
        <Grid
          item
          sx={{
            fontSize: 15,
          }}
        >
          <span style={{ color: `rgb(94, 77, 245)` }}>
            Don't have an account?{" "}
          </span>
          <Link className="link" to="signup">
            Sign up
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
