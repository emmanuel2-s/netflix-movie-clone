import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Network from "./components/error404";

// ToastContainer.configure({
//   position: "top-center",
//   style: {
//     zIndex: "2000",
//   },
// });

function App() {
  const { path } = useParams;
  const [count, setCount] = useState(0);
  const isOnline = navigator.onLine;
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
          {isOnline ? (
            <Route exact path="/" element={<Home />} />
          ) : (
            <h3>you are not connected</h3>
          )}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
