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

  const Togglefun = () => {
    if (Mode === "light" && ModeText === "DarkMode") {
      setMode("dark");
      setModeText("LightMode");
      showAlert("Dark Mode has been Enabled!", "Successfully!");
    } else {
      setMode("light");
      setModeText("DarkMode");
      showAlert("Light Mode has been Enabled!", "Successfully!");
    }
  };

  // const About = () => {
  //   return <h1>Hello About</h1>
  // }
  // const Home = () => {
  //   return <h1>Hello Home</h1>
  // }

  return (
    <>
      <Navbar
        title="TEXT-APP"
        mode={Mode}
        fun={Togglefun}
        textMode={ModeText}
      ></Navbar>

      <Alert alert={myAlert} />
      {/* <Textform title='A simple and free text analyze and word counter' />  */}

      <Routes>
       <Route exact path='/' element={ <Textform title='A simple and free text analyze and word counter' /> }></Route>
       <Route exact path='about' element={<About />}></Route>
     </Routes>
     

     {/* <Routes>
        <Route exact path="/home" component={() => <Home />}></Route>
        <Route exact path="/about" component={<About />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
