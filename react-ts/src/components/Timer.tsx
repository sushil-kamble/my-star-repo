import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(20);
  const [status, setStatus] = useState(true);
  const handleCounterStateChange = () => {
    setStatus((state) => !state);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (status) {
        setTimer((timer) => (timer - 1 > 0 ? timer - 1 : 0));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [status]);

  return (
    <div>
      <h2>This is a Timer</h2>
      {Math.floor(timer / 60)} | {timer % 60}
      <button className="t-btn ml-5" onClick={handleCounterStateChange}>
        {status ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default Timer;
