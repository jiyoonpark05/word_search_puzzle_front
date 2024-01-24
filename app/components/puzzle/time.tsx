import { useEffect, useState } from "react";
import * as css from "./time.css";

const Time = ({ initialDuration, onFinish, isComplete, onClear }) => {
  const [duration, setDuration] = useState(initialDuration);
  const [timmerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    let timerId;

    if (duration > 0 && !timmerFinished) {
      timerId = setInterval(() => {
        setDuration((prevDuration: number) => prevDuration - 1);
      }, 1000);
    } else if (duration === 0 && !timmerFinished) {
      setTimerFinished(true);
      onFinish();
    }

    // Cleanup on component unmount or if the timer is stopped
    return () => clearInterval(timerId);
  }, [duration, onFinish, timmerFinished]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  const calculateProgress = () => {
    return (1 - duration / initialDuration) * 100;
  };

  const handleStopTimer = () => {
    setTimerFinished(true);
    onClear();
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.leftTime}>{formatTime(duration)}</div>
        <progress
          className={css.customProgress}
          value={calculateProgress()}
          max="100"
        ></progress>
      </div>
      {duration > 0 && isComplete && (
        <div className={css.buttonComplete} onClick={handleStopTimer}>
          GAME CLEAR
        </div>
      )}
    </>
  );
};

export default Time;
