import React from "react";
import ReactDOM from "react-dom";
import Logger from "./logger";

import "./styles.css";

function App() {
  Logger.warn("yoa");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
