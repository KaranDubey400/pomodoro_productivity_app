import {useTimer} from "./useTimer";

/**
 * This hook is a wrapper around the useTimer hook.
 * It allows starting, pausing and resetting the timer in a reusable way.
 */
export function usePomodoro() {
  const {
    setTimer,
    setIsRunning,
    setIsFinished,
    isRunning,
    isFinished,
    start,
    pause,
    formattedTimer,
  } = useTimer(25);

  function pomodoro(): void {
    setIsRunning(false);
    setIsFinished(false);
    setTimer(25 * 60);
  }

  function takeShortBreak(): void {
    setIsRunning(false);
    setIsFinished(false);
    setTimer(5 * 60);
  }

  function takeLongBreak(): void {
    setIsRunning(false);
    setIsFinished(false);
    setTimer(15 * 60);
  }

  return {
    isRunning,
    isFinished,
    formattedTimer,
    pomodoro,
    takeShortBreak,
    takeLongBreak,
    start,
    pause,
  };
}
