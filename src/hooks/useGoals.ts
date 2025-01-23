import {useEffect, useState} from "react";
import {Goal} from "../types";
import {z} from "zod";
import {isIdxInArrayRange} from "../util";

/**
 * This hook is responsible for managing the goals.
 * It allows adding, completing, deleting single and all goals in a reusable way
 */
export function useGoals() {
  const [goals, setGoals] = useState<Goal[]>([]);

  // load goals from local storage on mount
  // local storage persist even after page reload
  useEffect(() => {
    const goals = localStorage.getItem("goals");
    if (goals) {
      setGoals(JSON.parse(goals));
    }
  }, []);

  function addGoal(goal: Goal): void {
    // validation
    const addedGoal = z.object({
      name: z.string().min(1),
      finished: z.boolean(),
    });
    // data not valid -> we return
    if (!addedGoal.parse(goal)) {
      return;
    }
    // data valid -> we add the goal
    setGoals([goal, ...goals]);
    localStorage.setItem("goals", JSON.stringify([goal, ...goals]));
  }

  // helper which creates a goal from a name and adds it
  function addGoalByName(name: string): void {
    addGoal({ name, finished: false } as Goal);
  }

  function completeGoal(index: number): void {
    // can't be out of bounds, worst case we do nothing
    const newGoals: Goal[] = goals.map((goal, idx) => {
      if (index === idx) {
        goal.finished = true;
      }
      return goal;
    });
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  }

  function deleteGoal(index: number): void {
    // array index out of bounds -> we return
    if (!isIdxInArrayRange(goals, index)) {
      return;
    }
    // array index in bounds -> we delete the goal
    const newGoals: Goal[] = goals.filter((goal, idx) => idx !== index);
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  }

  function deleteFinished(): void {
    const newGoals: Goal[] = goals.filter((goal) => !goal.finished);
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  }

  function deleteAllGoals(): void {
    setGoals([]);
    localStorage.setItem("goals", JSON.stringify([]));
  }

  return {
    goals,
    addGoalByName,
    completeGoal,
    deleteGoal,
    deleteFinished,
    deleteAllGoals,
  };
}
