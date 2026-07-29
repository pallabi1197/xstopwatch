import { useEffect, useState } from "react";

function App() {
  const [runningTime, setRunningTime] = useState(false);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    let interValID;

    if (runningTime) {
      interValID = setInterval(() => {
        setStartTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interValID);
    }

    return () => clearTimeout(interValID);
  }, [runningTime]);

  const startStop = () => {
    setRunningTime((prev) => !prev);
  };

  const reset = () => {
    setRunningTime(false);
    setStartTime(0);
  };

  const formatTime = (seconds) => {
    const mintues = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${mintues}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(startTime)}</p>
      <button onClick={startStop}>{runningTime ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
