import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title="A-One"/>
      <div className="container">
      <TextForm heading="Enter the text to analyze"/> {/* heading prop pass gareko */}
        
      </div>
    </>
  );
}

export default App;
