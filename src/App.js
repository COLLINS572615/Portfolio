// @ts-nocheck
import React from "react";
import "./App.css";

/**
 * @param {{ subject: any; }} props
 */
function App(props) {
  const name = props;
  // console.log(name);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello {props}</p>
      </header>
    </div>
  );
}

export default App;
