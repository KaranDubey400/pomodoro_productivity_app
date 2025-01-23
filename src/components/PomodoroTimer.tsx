import React, { ReactNode } from "react";

interface IPomodoroTimerProps {
  formattedTimer: string;
  children: ReactNode;
}

/**
 * This component renders the timer and additional children (controls etc.)
 *
 * @param formattedTimer - Formatted timer string
 * @param children - Additional children (controls etc.)
 */
export function PomodoroTimer({
  formattedTimer,
  children,
}: IPomodoroTimerProps) {
  return (
    <div className="flex flex-col gap-y-8 items-center justify-center bg-gray-50 shadow-lg rounded-2xl py-8 px-16">
      {/*Timer render*/}
      <h2 className="text-center text-7xl md:text-8xl font-extrabold text-gray-700">
        {formattedTimer}
      </h2>
      {/*Start or pause button*/}
      <div className="text-3xl text-gray-700 flex flex-col items-center gap-y-6 lg:px-20">
        {children}
      </div>
    </div>
  );
}
