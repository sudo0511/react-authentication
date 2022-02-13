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
} from "../Imports/imports";
import { Link } from "react-router-dom";

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
          <MyLink href="#" underline="none">
            Forgot Password
          </MyLink>
        </Grid>
        <Grid
          item
          sx={{
            fontSize: 15,
          }}
        >
          <MyLink href="#" underline="none">
            Don't have an account? <Link to="signup">Sign up</Link>
          </MyLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
