import React, { useRef, useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Link as MyLink,
  Alert,
} from "../Imports/imports";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwdRef = useRef();
  const passwdConfirmRef = useRef();
  const { signup } = useContext(AuthContext);
  const [error, setError] = useState("");

  // console.log(signup);

  const handleSignUp = async (e) => {
    // e.preventDefault();
    // console.log(passwdRef.current.value, " ", passwdConfirmRef.current.value);
    if (passwdRef.current.value !== passwdConfirmRef.current.value) {
      return setError("Password do not match.");
    }
    try {
      setError("");
      await signup(emailRef.current.value, passwdRef.current.value);
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
            width: 370,
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
      <MyLink href="#" underline="none">
        Already have an account?{" "}
        <Link to="/">
          <u>Login</u>
        </Link>
      </MyLink>
      {/* {JSON.stringify(currentUser.email)} */}
    </Box>
  );
};

export default Signup;
