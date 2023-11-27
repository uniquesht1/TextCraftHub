import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Try from './components/Zombie'
import "./components/darkModeButton.css"; //do this free vayesi



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
      <Navbar title="A-One" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* heading prop pass gareko */}
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
