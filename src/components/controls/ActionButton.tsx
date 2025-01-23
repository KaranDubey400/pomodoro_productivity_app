import React, { ReactNode } from "react";

interface IActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  hover?: string;
  text?: string;
  icon?: ReactNode;
}

/**
 * This component is responsible for rendering a custom button
 * It extends the default html button props and adds custom props
 *
 * @param props {IActionButtonProps} - custom props of the component + the default html button props
 */
export function ActionButton(props: IActionButtonProps) {
  const { color, hover, text, icon } = props;
  return (
    <button
      {...props}
      className={`${color} ${hover} transition px-4 py-3 rounded-xl font-bold uppercase`}
    >
      <div className="flex gap-x-2 items-center">
        {icon}
        {text}
      </div>
    </button>
  );
}
