import React from "react";
import { ActionButton } from "./ActionButton";
import { GiTomato } from "react-icons/gi";
import { BsBatteryCharging, BsBatteryHalf } from "react-icons/bs";

interface IPomodoroControlsProps {
  pomodoro: () => void;
  takeShortBreak: () => void;
  takeLongBreak: () => void;
}

/**
 * This component renders the controls for the pomodoro timer.
 * Each control is a button that calls the corresponding callback.
 *
 * @param pomodoro - callback for starting a pomodoro
 * @param takeShortBreak - callback for starting a short break
 * @param takeLongBreak - callback for starting a long break
 */
export function PomodoroControls({
  pomodoro,
  takeShortBreak,
  takeLongBreak,
}: IPomodoroControlsProps) {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-x-4 gap-y-4 pt-5 text-gray-700 text-2xl md:text-xl">
      <ActionButton
        onClick={takeShortBreak}
        color="bg-yellow-300 text-gray-800"
        hover="hover:bg-yellow-400"
        text="Short"
        icon={<BsBatteryHalf />}
      />
      <ActionButton
        onClick={pomodoro}
        color="bg-red-500 text-white"
        hover="hover:bg-red-600"
        text="Pomodoro"
        icon={<GiTomato />}
      />
      <ActionButton
        onClick={takeLongBreak}
        color="bg-amber-400 text-gray-800"
        hover="hover:bg-amber-500"
        text="Long break"
        icon={<BsBatteryCharging />}
      />
    </div>
  );
}
