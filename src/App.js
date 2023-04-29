import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar  from "./components/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Sucursales } from "./pages/Sucursales";
import { Modal } from "./components/Modal";

/*
      

              <div>
      <Tabla />
    </div>
*/

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  /*
  <div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>

    <Tabla />



  */


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Sucursales" element={<Sucursales/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
