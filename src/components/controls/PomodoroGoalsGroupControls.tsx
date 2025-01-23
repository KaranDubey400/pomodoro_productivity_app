import { ActionButton } from "./ActionButton";
import { AiFillDelete } from "react-icons/ai";
import React from "react";

interface IPomodoroGoalsGroupControls {
  deleteFinished: () => void;
  deleteAllGoals: () => void;
}

/**
 * This component renders the controls for the all pomodoro goals.
 * Each control is a button that calls the corresponding callback.
 *
 * @param deleteFinished - callback for deleting all finished goals
 * @param deleteAllGoals - callback for deleting all goals
 */
export function PomodoroGoalsGroupControls({
  deleteFinished,
  deleteAllGoals,
}: IPomodoroGoalsGroupControls) {
  return (
    <div className="flex gap-x-4 justify-end">
      <ActionButton
        onClick={deleteFinished}
        text="Finished"
        icon={<AiFillDelete />}
        color="bg-red-500 text-white"
        hover="hover:bg-red-600"
      />
      <ActionButton
        onClick={deleteAllGoals}
        text="All"
        icon={<AiFillDelete />}
        color="bg-red-500 text-white"
        hover="hover:bg-red-600"
      />
    </div>
  );
}
