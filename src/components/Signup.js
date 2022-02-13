import React from "react";
import { Box, Button, TextField, Link as MyLink } from "../Imports/imports";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Box className="container">
        <h1>Sign Up</h1>
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
            marginBottom: 3,
          }}
          variant="outlined"
          type="password"
          label="Password"
          fullWidth
          placeholder="***********"
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
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            marginBottom: 3,
          }}
        >
          Sign up
        </Button>
        <MyLink href="#" underline="none">
          Already have an account?{" "}
          <Link to="/">
            <u>Login</u>
          </Link>
        </MyLink>
      </Box>
    </>
  );
};

export default Signup;
