import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

import { Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [ModeText, setModeText] = useState("DarkMode");
  const [myAlert, setmyAlert] = useState(null);

  const showAlert = (message, type) => {
    setmyAlert({
      msg: message,
      tp: type,
    });
    setTimeout(() => {
      setmyAlert(null);
    }, 1200);
  };

  const Togglefun = (color) => {
    console.log(color);
    if (Mode === "light" && ModeText === "DarkMode") {
      setMode("dark");
      setModeText("LightMode");
      showAlert("Dark Mode has been Enabled!", "Successfully!");
      
      document.body.style.background = color;
    } else {
      setMode("light");
      setModeText("DarkMode");
      showAlert("Light Mode has been Enabled!", "Successfully!");
      document.body.style.background = "#fff";
    }
  };

 
  return (
    <>
      <Navbar
        title="TEXT-APP"
        mode={Mode}
        fun={Togglefun}
        textMode={ModeText}
      ></Navbar>
      <Alert alert={myAlert} />
      <Routes>
        <Route
          exact
          path="/text-analyzer"
          element={
            <Textform
              title="A simple and free text analyze and word counter"
              textMode={ModeText}
            />
          }
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
