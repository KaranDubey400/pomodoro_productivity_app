import {useEffect, useMemo, useState} from "react";
import useSound from "use-sound";

/**
 * This hook is responsible for managing the timer.
 * It allows starting, pausing and resetting the timer in a reusable way
 *
 * @param defaultValue the default value of the timer in minutes
 */
export function useTimer(defaultValue: number) {
  const [timer, setTimer] = useState<number>(defaultValue * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [play, { sound }] = useSound("/alarm.wav");

  // runs on component mount or if timer or isRunning changes
  // if isRunning is true and timer > 0, start the timer
  useEffect(() => {
    if (isRunning && timer > 0) {
      const timeoutId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(timeoutId);
    } else if (timer == 0) {
      setIsFinished(true);
      play();
    }
  }, [isRunning, timer]);

  /**
   * Memoized timer in the format of mm:ss
   * @return {string} the timer in the format of mm:ss
   */
  const formattedTimer = useMemo(() => {
    const minutes = Math.floor(timer / 60);
    const formattedSeconds = (timer - minutes * 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    const formattedMinutes = minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    return `${formattedMinutes}:${formattedSeconds}`;
  }, [timer]);

  function start(): void {
    setIsRunning(true);
    setIsFinished(false);
  }

  function pause(): void {
    setIsRunning(false);
  }

  return {
    isRunning,
    isFinished,
    formattedTimer,
    setTimer,
    setIsRunning,
    setIsFinished,
    start,
    pause,
  };
}
