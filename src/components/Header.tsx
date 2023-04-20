"use client";
import { BurgerButton } from "@/components/BurgerButton";
import { PlanetName, planets } from "@/utils/planet";
import { PropsWithClassName } from "@/utils/types";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export interface HeaderProps {
  planetName: PlanetName;
}

export const Header = ({
  className,
  planetName,
}: PropsWithClassName<HeaderProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={clsx("relative z-10 w-full", className)}>
      <MobileNavigation
        onClick={() => setIsOpen(false)}
        isOpen={isOpen}
        className="sm:hidden"
      />
      <div className="bg-dark relative flex w-full justify-between border-b-[1px] border-gray-dark bg-black bg-stars px-6 py-4 sm:flex-wrap sm:gap-y-10 md:flex-nowrap md:justify-between">
        <p className="grid min-w-fit place-items-center font-antonio text-3xl sm:basis-full md:basis-auto">
          THE PLANETS
        </p>
        <BurgerButton
          className="sm:hidden"
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <nav className="hidden w-full sm:block md:w-auto">
          <ul className="h-full flex-wrap items-center justify-around sm:flex md:justify-center md:gap-1">
            {planets.map(({ name }) => (
              <li
                aria-current={planetName === name ? "page" : undefined}
                data-planet={name}
                className={clsx(
                  "group border-b-4 border-transparent text-center transition-all duration-300",
                  "[&[data-planet=mercury]]:hover:border-mercury",
                  "[&[data-planet=venus]]:hover:border-venus",
                  "[&[data-planet=earth]]:hover:border-earth",
                  "[&[data-planet=mars]]:hover:border-mars",
                  "[&[data-planet=jupiter]]:hover:border-jupiter",
                  "[&[data-planet=saturn]]:hover:border-saturn",
                  "[&[data-planet=uranus]]:hover:border-uranus",
                  "[&[data-planet=neptune]]:hover:border-neptune",
                  "[&[aria-current=page][data-planet=neptune]]:border-mercury",
                  "[&[aria-current=page][data-planet=mercury]]:border-mercury",
                  "[&[aria-current=page][data-planet=venus]]:border-venus",
                  "[&[aria-current=page][data-planet=earth]]:border-earth",
                  "[&[aria-current=page][data-planet=mars]]:border-mars",
                  "[&[aria-current=page][data-planet=jupiter]]:border-jupiter",
                  "[&[aria-current=page][data-planet=saturn]]:border-saturn",
                  "[&[aria-current=page][data-planet=uranus]]:border-uranus"
                )}
                key={name}
              >
                <Link
                  href={`/${name.toLowerCase()}`}
                  className="px-2 py-3 uppercase transition-transform"
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
