import { PomodoroGoal } from "./PomodoroGoal";
import React, { ReactNode } from "react";
import { Goal } from "../../types";

interface IPomodoroGoalsProps {
  title: string;
  goals: Goal[];
  completeGoal: (index: number) => void;
  deleteGoal: (index: number) => void;
  children: ReactNode;
}

/**
 * This component renders the goals and additional children (controls etc.)
 *
 * @param goals - Array of goals
 * @param title - Title of the goals section
 * @param children - Additional children (controls etc.)
 * @param completeGoal - callback for completing a goal
 * @param deleteGoal - callback for deleting a goal
 */
export function PomodoroGoals({
  goals,
  title,
  children,
  completeGoal,
  deleteGoal,
}: IPomodoroGoalsProps) {
  return (
    <div className="bg-gray-50 shadow-lg lg:min-w-[500px] rounded-xl py-10 px-8">
      <div className="flex justify-between items-center pb-3">
        {/* title */}
        <h2 className="text-gray-700 text-3xl font-extrabold pb-3">{title}</h2>
      </div>
      {/* rendering goals */}
      <ul className="max-h-[300px] overflow-y-auto">
        {goals.map((goal, idx) => (
          <li key={`${goal.name}-${idx}`}>
            <PomodoroGoal
              index={idx}
              finished={goal.finished}
              goalName={goal.name}
              completeGoal={completeGoal}
              deleteGoal={deleteGoal}
            />
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
