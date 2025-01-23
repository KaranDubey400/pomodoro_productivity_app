import { ActionButton } from "../controls/ActionButton";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import { PomodoroGoalTitle } from "./PomodoroGoalTitle";
import React from "react";

interface IPomodoroGoalProps {
  index: number;
  goalName: string;
  finished: boolean;
  completeGoal: (index: number) => void;
  deleteGoal: (index: number) => void;
}

/**
 * This component renders a single goal.
 *
 * @param goalName - Goal name
 * @param index - Position of the goal in the array.
 * @param finished - Boolean that indicates if the goal is finished.
 * @param completeGoal - Callback for completing a goal.
 * @param deleteGoal - Callback for deleting a goal.
 */
export function PomodoroGoal({
  goalName,
  index,
  finished,
  completeGoal,
  deleteGoal,
}: IPomodoroGoalProps) {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between md:gap-x-4 bg-gray-100 rounded-xl px-4 py-4 my-4 font-bold text-gray-700">
      <PomodoroGoalTitle title={goalName} finished={finished} />
      {/* actions */}
      <div className="flex gap-x-2 text-md text-white">
        {!finished && (
          <ActionButton
            onClick={() => completeGoal(index)}
            color="bg-green-500"
            hover="hover:bg-green-600"
            icon={<AiFillCheckCircle />}
          />
        )}
        <ActionButton
          onClick={() => deleteGoal(index)}
          color="bg-red-500"
          hover="hover:bg-red-600"
          icon={<AiFillDelete />}
        />
      </div>
    </div>
  );
}
