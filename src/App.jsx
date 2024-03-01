import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

// ToastContainer.configure({
//   position: "top-center",
//   style: {
//     zIndex: "2000",
//   },
// });

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
