import React from "react";
import { ActionButton } from "./ActionButton";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";

interface ITimerControlProps {
  isRunning: boolean;
  start: () => void;
  pause: () => void;
}

/**
 * This component renders the controls for the timer.
 * It renders a start or pause button depending on the isRunning prop.
 *
 * @param isRunning - boolean that indicates if the timer is running
 * @param start - callback for starting the timer
 * @param pause - callback for pausing the timer
 */
export function TimerControl({ isRunning, start, pause }: ITimerControlProps) {
  if (isRunning) {
    return (
      <ActionButton
        onClick={pause}
        color="bg-orange-500 text-white"
        hover="hover:bg-orange-600"
        text="Pause"
        icon={<BsPauseCircleFill />}
      />
    );
  }
  return (
    <ActionButton
      onClick={start}
      color="bg-green-500 text-white"
      hover="hover:bg-green-600"
      text="Start"
      icon={<BsPlayCircleFill />}
    />
  );
}
