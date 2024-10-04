import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("button clicked");
    let newText = "";
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("button clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleSpaces = () => {
    console.log("remove extra spaces");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleSpecialChar = () => {
    console.log("remove special characters");
    let newText = text.replace(/[^\w\s]/gi, "");
    setText(newText);
  };

  const [text, setText] = useState(""); //index, setIndex use garera set text ma use state lerako fo internal change
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1> {/* heading prop app bata taaneko */}
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "darkgrey",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter text here"
          ></textarea>
        </div>
        <div className="container">
          <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleLowClick}
          >
            convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>
            Remove Spaces
          </button>

          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleSpecialChar}
          >
            Remove special characters
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
