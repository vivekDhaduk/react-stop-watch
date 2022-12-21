import React, { useEffect, useState } from "react";
import "./App.css";
// import { Onchange } from './Onchange';

const App = () => {
  const [count, setCount] = useState(20);
  const [startTime, setStartTime] = useState(false);

  useEffect(() => {
    if (startTime === true && count > 0) {
      var interval = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setCount(count);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startTime]);

  useEffect(() => {
    setStartTime(false);
  }, [count > 0]);

  // useEffect(() => {
  //   setStartTime(true)
  // },[])

  return (
    <div>
      <h2>count : {count}</h2>
      <button className="btn btn-primary" onClick={() => setStartTime(true)}>
        Start
      </button>
      <button className="btn btn-success" onClick={() => setStartTime(false)}>
        Stop
      </button>
      <button className="btn btn-success" onClick={() => setCount(20)}>
        Reset
      </button>
      {/* <button disabled={count === 0} className="btn btn-success" onClick={() => setCount(5)}>
        piyush bhai nu button 
      </button> */}
    </div>
  );
};

export default App;


