import "./styles.css";
import Avatar from "./Avatar.jsx";
import React, { useEffect, useState } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [running, setRunning] = useState(true);
  var timer;
  useEffect(() => {
    if (running) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            setSeconds(0);
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);
  function handleRestart() {
    setMinutes(0);
    setSeconds(0);
    setRunning(true);
  }
  function handleStop() {
    setRunning((prevRunning) => !running);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>StopWatch</h1>
      </div>
      <Avatar img="https://cdn-icons-png.flaticon.com/512/3203/3203214.png" />
      <div className="heading2">
        <h2>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h2>
      </div>
      <div className="b1">
        <button onClick={handleStop} className="b2">
          {running ? "Stop" : "Start"}
        </button>
        <button onClick={handleRestart} className="b3">
          Restart
        </button>
      </div>
    </div>
  );
}
