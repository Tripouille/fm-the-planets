"use client";

import { PropsWithClassName } from "@/utils/types";
import clsx from "clsx";

export interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}
export const BurgerButton = ({
  isOpen,
  onClick,
  className,
}: PropsWithClassName<BurgerButtonProps>) => {
  return (
    <button
      data-open={isOpen}
      type="button"
      className={clsx("[&[data-open='true']>svg]:text-gray-base", className)}
      aria-label="burger menu"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 17"
        className="h-4 w-6"
      >
        <g fill="currentColor" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </button>
  );
};
