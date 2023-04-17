"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import data from "../app/data.json";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        data-open={isOpen}
        type="button"
        className="flex flex-col justify-center gap-1 [&>div]:h-1 [&>div]:w-6 [&>div]:bg-white [&[data-open='true']>div]:bg-gray-base"
        aria-label="burger menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav
        className={clsx(
          "absolute left-0 top-full z-20 w-full overflow-hidden border-t-[1px] border-gray-dark"
        )}
      >
        <NavigationLinks isOpen={isOpen} />
      </nav>
    </>
  );
};

const NavigationLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <ul
      className={clsx(
        { "-translate-y-full": !isOpen },
        { "translate-y-0": isOpen },
        "flex flex-col items-center bg-black px-6 py-6 transition-transform "
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
