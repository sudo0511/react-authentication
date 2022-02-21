import React, { useRef, useState, useContext } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { useAuth } from "../Contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwdRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const handleLogin = async (e) => {
    try {
      setError("");
      await login(emailRef.current.value, passwdRef.current.value);
      navigator("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <Box className="container">
      <h1>Login</h1>
      {error && (
        <Alert
          fullWidth
          sx={{
            mb: 2,
          }}
          severity="error"
          variant="filled"
          onClose={() => {
            setError("");
          }}
        >
          {error}
        </Alert>
      )}
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
        inputRef={emailRef}
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
        inputRef={passwdRef}
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
        onClick={handleLogin}
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
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
