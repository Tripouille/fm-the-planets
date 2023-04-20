"use client";
import { PlanetName } from "@/utils/planet";
import { PropsWithClassName } from "@/utils/types";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { PlanetView } from "./PlanetViews";

export function PlanetViewNavigation({
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
      className={clsx("flex flex-col justify-center", className)}
    >
      <ul
        data-planet={planetName}
        className={clsx(
          "flex flex-col gap-4",
          "[&[data-planet=mercury]_button:hover]:bg-mercury",
          "[&[data-planet=venus]_button:hover]:bg-venus",
          "[&[data-planet=earth]_button:hover]:bg-earth",
          "[&[data-planet=mars]_button:hover]:bg-mars",
          "[&[data-planet=jupiter]_button:hover]:bg-jupiter",
          "[&[data-planet=saturn]_button:hover]:bg-saturn",
          "[&[data-planet=uranus]_button:hover]:bg-uranus",
          "[&[data-planet=neptune]_button:hover]:bg-neptune",
          "[&[data-planet=mercury]_button[aria-current='true']]:bg-mercury",
          "[&[data-planet=venus]_button[aria-current='true']]:bg-venus",
          "[&[data-planet=earth]_button[aria-current='true']]:bg-earth",
          "[&[data-planet=mars]_button[aria-current='true']]:bg-mars",
          "[&[data-planet=jupiter]_button[aria-current='true']]:bg-jupiter",
          "[&[data-planet=saturn]_button[aria-current='true']]:bg-saturn",
          "[&[data-planet=uranus]_button[aria-current='true']]:bg-uranus",
          "[&[data-planet=neptune]_button[aria-current='true']]:bg-neptune"
        )}
      >
        <li>
          <button
            onClick={() => setPlanetView("overview")}
            className="flex w-full gap-4 border-2 border-gray-dark px-8 py-2"
            aria-current={planetView === "overview"}
          >
            <span className="font-bold text-gray-dark">01</span> OVERVIEW
          </button>
        </li>

        <li>
          <button
            onClick={() => setPlanetView("structure")}
            className="flex w-full gap-4 border-2 border-gray-dark px-8 py-2"
            aria-current={planetView === "structure"}
          >
            <span className="font-bold text-gray-dark">02</span> INTERNAL
            STRUCTURE
          </button>
        </li>

        <li>
          <button
            onClick={() => setPlanetView("geology")}
            className="flex w-full gap-4 border-2 border-gray-dark px-8 py-2"
            aria-current={planetView === "geology"}
          >
            <span className="font-bold text-gray-dark">03</span> SURFACE GEOLOGY
          </button>
        </li>
      </ul>
    </nav>
  );
}
