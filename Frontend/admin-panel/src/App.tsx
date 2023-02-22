import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
