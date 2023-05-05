import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(15);

  useEffect(() => {
    if (temperature > 39) {
      document.body.style.backgroundColor = "#d92808";
    } else if (temperature > 34) {
      document.body.style.backgroundColor = "#DF9210";
    } else if (temperature > 29) {
      document.body.style.backgroundColor = "#df6a10";
    } else if (temperature > 24) {
      document.body.style.backgroundColor = "#ffd104";
    } else if (temperature > 19) {
      document.body.style.backgroundColor = "#f5d328";
    } else if (temperature > 14) {
      document.body.style.backgroundColor = "#70bf40";
    } else if (temperature > 9) {
      document.body.style.backgroundColor = "#00fdff";
    } else if (temperature > 4) {
      document.body.style.backgroundColor = "#50a7f9";
    } else {
      document.body.style.backgroundColor = "#0432ff";
    }
  }, [temperature]);

  const resetTemp = () => {
    setTemperature(15);
  };

  const increaseByTwo = () => {
    setTemperature(temperature + 2);
  };

  const decreaseByTwo = () => {
    setTemperature(temperature - 2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Temperature Control App</h1>
        <p>Current Temperature: {temperature} °C</p>
        <button className="btn btn-danger" onClick={increaseByTwo}>+2</button>
        <button className="btn btn-primary" onClick={decreaseByTwo}>-2</button>
        <button className="btn btn-success"onClick={resetTemp}>Reset</button>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <div><h2>The temperature is now {temperature} degree Celcius</h2></div>
        </div>
      </header>
    </div>
  );
}

export default App;
