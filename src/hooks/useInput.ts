import React, {useState} from "react";

/**
 * This hook is responsible for managing the input value.
 *
 * @param initialValue the initial value of the input
 */
export function useInput(initialValue: string = "") {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setInputValue(e.currentTarget.value);
  }

  function clearInput(): void {
    setInputValue("");
  }

  return { inputValue, handleChange, clearInput };
}
