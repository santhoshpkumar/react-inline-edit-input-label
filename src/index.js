import React from "react";
import { StyleRoot } from "radium";
import ReactDOM from "react-dom";

import TestPage from "./myTestPage";

import "./styles.css";

function App() {
  return (
    <StyleRoot className="App">
      <h1 style={{ textAlign: "center" }}>Editable label component</h1>
      <TestPage />
    </StyleRoot>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
