"use client";
import { BurgerButton } from "@/components/BurgerButton";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import data from "../app/data.json";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full">
      <nav
        aria-hidden={!isOpen}
        className={clsx(
          { "-translate-y-full": !isOpen },
          { "top-full translate-y-0": isOpen },
          "absolute left-0 w-full transition-transform duration-500"
        )}
      >
        <NavigationLinks />
      </nav>
      <div className="bg-dark relative flex w-full justify-between border-b-[1px] border-gray-dark bg-black px-6 py-4">
        <p className="text-3xl">THE PLANETS</p>
        <BurgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
}

const NavigationLinks = () => {
  return (
    <ul
      className={clsx(
        "flex flex-col items-center bg-black px-6 py-6 transition-transform"
      )}
    >
      {data.map(({ name }) => (
        <li className="group w-full" key={name}>
          <Link
            href={`/${name.toLowerCase()}`}
            className="flex h-full items-center justify-between border-b-[1px] border-gray-dark py-6 focus-visible:outline-none group-last:border-b-0"
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
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
};
