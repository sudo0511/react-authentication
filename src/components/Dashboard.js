import { Button, Card, Box, Typography } from "../Imports/imports";
import React, { useContext, useState } from "react";
import { CardActions, CardContent, CardHeader } from "@mui/material";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
    } catch (err) {
      setError(err.message);
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: "10px auto",
        padding: "10px",
        transform: "scale(0.8)",
      }}
    >
      <Card
        sx={{
          margin: "10px auto",
          width: 300,
          height: 200,
        }}
        variant="outlined"
      >
        <CardContent>
          <Typography variant="h5">Profile</Typography>
          <hr />
          <Typography variant="h6">
            <p>
              <strong>Email : </strong>
              {currentUser.email}
            </p>
            <p>Welcome to profile page</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Dashboard;
