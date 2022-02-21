import React, { useRef, useContext, useState } from "react";
import { Box, Button, TextField, Alert, Grid } from "../Imports/imports";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwdRef = useRef();
  const passwdConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // console.log(signup);

  const handleSignUp = async (e) => {
    // e.preventDefault();
    // console.log(passwdRef.current.value, " ", passwdConfirmRef.current.value);
    if (passwdRef.current.value !== passwdConfirmRef.current.value) {
      return setError("Password do not match.");
    }
    try {
      setError("");
      await signup(emailRef.current.value, passwdRef.current.value).then(
        (res) => {
          setSuccess("Sign up successfull");
          console.log(res);
        }
      );
    } catch (error) {
      console.log(error);
      setError(error.name);
    }
  };

  return (
    <Box className="container">
      <h1>Sign Up</h1>
      {error && (
        <Alert
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
      {success && (
        <Alert
          sx={{
            mb: 2,
          }}
          severity="success"
          variant="filled"
          onClose={() => {
            setSuccess("");
          }}
        >
          {success}
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
          marginBottom: 3,
        }}
        variant="outlined"
        type="password"
        label="Password"
        fullWidth
        placeholder="***********"
        required
        inputRef={passwdRef}
      />
      <TextField
        sx={{
          marginBottom: 2,
        }}
        variant="outlined"
        type="password"
        label="Re-enter Password"
        fullWidth
        placeholder="***********"
        required
        inputRef={passwdConfirmRef}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          marginBottom: 3,
        }}
        onClick={handleSignUp}
      >
        Sign up
      </Button>
      <Grid
        sx={{
          fontSize: 15,
        }}
      >
        <span style={{ color: `rgb(94, 77, 245)` }}>
          {" "}
          Already have an account?{" "}
        </span>
        <Link className="link" to="/login">
          Login
        </Link>
      </Grid>

      {/* {JSON.stringify(currentUser.email)} */}
    </Box>
  );
};

export default Signup;
