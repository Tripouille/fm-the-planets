"use client";
import { BurgerButton } from "@/components/BurgerButton";
import { planets } from "@/utils/planet";
import { PropsWithClassName } from "@/utils/types";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-10 w-full">
      <MobileNavigation
        onClick={() => setIsOpen(false)}
        isOpen={isOpen}
        className="sm:hidden"
      />
      <div className="bg-dark relative flex w-full justify-between border-b-[1px] border-gray-dark bg-black bg-stars px-6 py-4 sm:flex-wrap sm:gap-y-10">
        <p className="text-center font-antonio text-3xl sm:basis-full">
          THE PLANETS
        </p>
        <BurgerButton
          className="sm:hidden"
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <nav className="hidden w-full sm:block">
          <ul className="justify-around sm:flex">
            {planets.map(({ name }) => (
              <li
                className="group w-full text-center transition-transform hover:scale-125"
                key={name}
              >
                <Link
                  href={`/${name.toLowerCase()}`}
                  className="px-6 py-3 uppercase transition-transform group-hover:scale-125"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const MobileNavigation = ({
  onClick,
  isOpen,
  className,
}: PropsWithClassName<{
  onClick: () => void;
  isOpen: boolean;
}>) => {
  return (
    <nav
      aria-hidden={!isOpen}
      className={clsx(
        { "-translate-y-full": !isOpen },
        { "top-full translate-y-0": isOpen },
        "absolute left-0 w-full transition-transform duration-500",
        className
      )}
    >
      <ul
        className={clsx(
          "flex flex-col items-center bg-black px-6 py-6 transition-transform"
        )}
      >
        {planets.map(({ name }) => (
          <li className="group w-full" key={name}>
            <Link
              onClick={onClick}
              href={`/${name.toLowerCase()}`}
              className="flex h-full items-center justify-between border-b-[1px] border-gray-dark py-6 group-last:border-b-0"
            >
              <p className={clsx("text-md flex items-start gap-6")}>
                <span
                  data-planet={name.toLowerCase()}
                  className={clsx(
                    "inline-block h-5 w-5 rounded-full",
                    "[&[data-planet=mercury]]:bg-mercury",
                    "[&[data-planet=venus]]:bg-venus",
                    "[&[data-planet=earth]]:bg-earth",
                    "[&[data-planet=mars]]:bg-mars",
                    "[&[data-planet=jupiter]]:bg-jupiter",
                    "[&[data-planet=saturn]]:bg-saturn",
                    "[&[data-planet=uranus]]:bg-uranus",
                    "[&[data-planet=neptune]]:bg-neptune"
                  )}
                  aria-hidden
                />
                <span className="inline-block uppercase">{name}</span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-2"
                viewBox="0 0 6 8"
                aria-hidden
              >
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
