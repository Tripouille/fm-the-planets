"use client";
import { PlanetName } from "@/utils/planet";
import { PropsWithClassName } from "@/utils/types";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { PlanetView } from "./PlanetViews";

export function MobilePlanetViewNavigation({
  planetName,
  planetView,
  setPlanetView,
  className,
}: PropsWithClassName<{
  planetName: PlanetName;
  planetView: PlanetView;
  setPlanetView: Dispatch<SetStateAction<PlanetView>>;
}>) {
  return (
    <nav
      aria-label="Manage the planet view"
      className={clsx("col-span-2", className)}
    >
      <ul
        data-planet={planetName}
        className={clsx(
          "flex w-full flex-wrap justify-around border-b-[1px] border-gray-dark font-bold text-gray-base",
          "[&[data-planet=mercury]_button]:border-mercury",
          "[&[data-planet=venus]_button]:border-venus",
          "[&[data-planet=earth]_button]:border-earth",
          "[&[data-planet=mars]_button]:border-mars",
          "[&[data-planet=jupiter]_button]:border-jupiter",
          "[&[data-planet=saturn]_button]:border-saturn",
          "[&[data-planet=uranus]_button]:border-uranus",
          "[&[data-planet=neptune]_button]:border-neptune"
        )}
      >
        <li>
          <button
            onClick={() => setPlanetView("overview")}
            className="px-2 py-3 [&[aria-current='true']]:border-b-4 [&[aria-current='true']]:text-white"
            aria-current={planetView === "overview"}
          >
            OVERVIEW
          </button>
        </li>

        <li>
          <button
            onClick={() => setPlanetView("structure")}
            className="px-2 py-3 [&[aria-current='true']]:border-b-4 [&[aria-current='true']]:text-white"
            aria-current={planetView === "structure"}
          >
            STRUCTURE
          </button>
        </li>

        <li>
          <button
            onClick={() => setPlanetView("geology")}
            className="px-2 py-3 [&[aria-current='true']]:border-b-4 [&[aria-current='true']]:text-white"
            aria-current={planetView === "geology"}
          >
            SURFACE
          </button>
        </li>
      </ul>
    </nav>
  );
}
