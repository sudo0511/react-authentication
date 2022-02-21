import React from "react";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../Contexts/AuthContext";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
