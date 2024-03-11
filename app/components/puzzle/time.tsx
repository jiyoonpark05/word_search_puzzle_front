import { useEffect, useState } from "react";
import { formatTime } from "../common/util";
import { TimerProps } from "./puzzle.types";
import * as css from "./time.css";

const Time = ({
  isStart,
  initialDuration,
  onFinish,
  isComplete,
  onClear,
}: TimerProps) => {
  const [duration, setDuration] = useState(initialDuration);
  const [timmerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    let timerId: string | number | NodeJS.Timer | undefined;

    if (isStart && duration > 0 && !timmerFinished) {
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

  const calculateProgress = () => {
    return (1 - duration / initialDuration) * 100;
  };

  // stopping timer and Record play result
  const handleStopTimer = () => {
    setTimerFinished(true);

    onClear(duration);
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
        {duration > 0 && isComplete && (
          <div className={css.buttonComplete} onClick={handleStopTimer}>
            GAME CLEAR
          </div>
        )}
      </div>
    </>
  );
};

export default Time;
