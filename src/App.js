import logo from './logo.svg';
import './App.css';
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(15);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
        <><div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <div><h2>The temperature is now {count} degree Celcius</h2></div>
          </div>
          <button className="btn btn-outline-danger" onClick={() => setCount(count + 2)}>Increase by 2</button>
          <button className="btn btn-outline-primary" onClick={() => setCount(count - 2)}>Decrease by 2</button>
          <button className="btn btn-outline-success" onClick={() => setCount(15)}>Reset to 15</button></>

    }
      </header>
    </div>
  );

 
}
document.body.style.backgroundColor = "#70bf40";
const TemperatureControl = useState;

if (TemperatureControl > 39) {
  document.body.style.backgroundColor = "#d92808";
} else if (TemperatureControl > 34 ) {
  document.body.style.backgroundColor = "#DF9210";
} else if (TemperatureControl > 29) {
  document.body.style.backgroundColor = "#df6a10";
} else if (TemperatureControl > 24 ) {
  document.body.style.backgroundColor = "#ffd104";
} else if (TemperatureControl > 19 ) {
  document.body.style.backgroundColor = "#f5d328";
} else if (TemperatureControl> 14 ) {
  document.body.style.backgroundColor = "#70bf40";
} else if (TemperatureControl > 9 ) {
  document.body.style.backgroundColor = "#00fdff";
} else if (TemperatureControl > 4 ) {
  document.body.style.backgroundColor =  "#50a7f9";
} else {
  document.body.style.backgroundColor = "#0432ff";

}

export default App;
