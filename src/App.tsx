import {AddPomodoro} from "./components/AddPomodoro";
import {PomodoroControls} from "./components/controls/PomodoroControls";
import {PomodoroGoalsGroupControls} from "./components/controls/PomodoroGoalsGroupControls";
import {TimerControl} from "./components/controls/TimerControl";
import {PomodoroGoals} from "./components/goals/PomodoroGoals";
import {PomodoroTimer} from "./components/PomodoroTimer";
import {useGoals} from "./hooks/useGoals";
import {usePomodoro} from "./hooks/usePomodoro";
import {ActionButton} from "./components/controls/ActionButton";
import React from "react";

/**
 * This is the application component that loads the app
 */
function App() {
  const {
    isRunning,
    isFinished,
    formattedTimer,
    start,
    pause,
    pomodoro,
    takeShortBreak,
    takeLongBreak,
  } = usePomodoro();

  const {
    goals,
    addGoalByName,
    completeGoal,
    deleteGoal,
    deleteFinished,
    deleteAllGoals,
  } = useGoals();

  // controls for the timer
  const controlActions = { pomodoro, takeShortBreak, takeLongBreak };
  const timerControl = { isRunning, start, pause };

  // goals grouped props and actions
  const goalsRenderProps = { goals, completeGoal, deleteGoal };
  const goalsGroupsActions = { deleteFinished, deleteAllGoals };

  return (
    <div className="bg-emerald-700 flex flex-col items-center min-h-screen">
      {/* Header */}
      <div className="py-12">
        <h1 className="tracking-widest text-5xl uppercase font-extrabold text-center text-white">
          Pomodoro
        </h1>
        <h2 className="text-2xl text-center text-gray-100 pt-4 font-medium">
          Learn more about the
          <a
            href="https://todoist.com/cs/productivity-methods/pomodoro-technique"
            target="_blank"
            className="underline px-1"
          >
            Pomodoro technique
          </a>
        </h2>
      </div>
      {/* Timer and goals */}
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-10 justify-center">
        <div className={"lg:w-1/2"}>
          <PomodoroTimer formattedTimer={formattedTimer}>
            {!isFinished && <TimerControl {...timerControl} />}
            <PomodoroControls {...controlActions} />
            {isFinished && (
              <ActionButton
                onClick={pomodoro}
                color="bg-orange-500"
                hover="hover:bg-orange-600"
                text="Reset"
              />
            )}
          </PomodoroTimer>
        </div>
        <div className={"lg:w-1/2"}>
          <PomodoroGoals title="Your session goals" {...goalsRenderProps}>
            <AddPomodoro addGoalByName={addGoalByName} />
            {goals.length > 0 && (
              <PomodoroGoalsGroupControls {...goalsGroupsActions} />
            )}
          </PomodoroGoals>
        </div>
      </div>
    </div>
  );
}

export default App;
