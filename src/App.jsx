import React, { useState } from "react";

function App() {

  let [time, setTime] = useState("TIME");

  

  function startTime() {
    setInterval(() => {
      let newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000);
  }


  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={startTime}>Start</button>
    </div>
  );
}

export default App;
