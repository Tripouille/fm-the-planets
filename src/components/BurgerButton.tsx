"use client";

export interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}
export const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
  return (
    <button
      data-open={isOpen}
      type="button"
      className="flex flex-col justify-center gap-1 [&>div]:h-1 [&>div]:w-6 [&>div]:bg-white [&[data-open='true']>div]:bg-gray-base"
      aria-label="burger menu"
      onClick={onClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
