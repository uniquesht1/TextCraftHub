import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./components/darkModeButton.css"; //do this free vayesi
import {HashRouter} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#27314f";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <HashRouter>
        <Navbar title="A-One" mode={mode} toggleMode={toggleMode} />
        {/* heading prop pass gareko */}
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />}></Route>

            <Route
              path="/"
              element={
                <TextForm heading="Enter the text to analyze" mode={mode} />
              }
            >
              {/* <TextForm heading="Enter the text to analyze" mode={mode} /> */}
            </Route>
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
