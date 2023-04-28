import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Tabla } from "./components/Tabla";

/*
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          </Routes>
          </Router>
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
    <div>
      <Tabla />
    </div>
  );
}

export default App;
