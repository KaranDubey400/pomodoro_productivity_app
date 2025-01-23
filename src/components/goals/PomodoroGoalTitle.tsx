import React from "react";

interface IPomodoroGoalTitleProps {
  title: string;
  finished: boolean;
}

/**
 * This component renders the title of a goal.
 *
 * @param title - Name of the goal
 * @param finished - Boolean that indicates if the goal is finished
 */
export function PomodoroGoalTitle({
  title,
  finished,
}: IPomodoroGoalTitleProps) {
  if (finished) {
    return (
      <div className={"w-full overflow-hidden"}>
        <h3 className="text-lg order-last md:order-first font-medium line-through text-gray-400 w-[200px] break-words">
          {title}
        </h3>
      </div>
    );
  }
  return (
    <div className={"w-full overflow-hidden"}>
      <h3 className="text-lg order-last md:order-first font-medium w-[250px] break-words">
        {title}
      </h3>
    </div>
  );
}
