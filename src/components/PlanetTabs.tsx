"use client";
import { getPlanet, PlanetName } from "@/utils/planet";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";
import Image from "next/image";

export interface PlanetTabsProps {
  planetName: PlanetName;
}

export const PlanetTabs = ({ planetName }: PlanetTabsProps) => {
  const { images } = getPlanet(planetName);

  return (
    <Tabs.Root
      className="grid grid-cols-1 place-items-center"
      defaultValue="overview"
    >
      <Tabs.List
        data-planet={planetName}
        className={clsx(
          "flex w-full flex-wrap justify-center border-b-[1px] border-gray-dark font-bold text-gray-base",
          "[&[data-planet=mercury]_button]:border-mercury",
          "[&[data-planet=venus]_button]:border-venus",
          "[&[data-planet=earth]_button]:border-earth",
          "[&[data-planet=mars]_button]:border-mars",
          "[&[data-planet=jupiter]_button]:border-jupiter",
          "[&[data-planet=saturn]_button]:border-saturn",
          "[&[data-planet=uranus]_button]:border-uranus",
          "[&[data-planet=neptune]_button]:border-neptune"
        )}
        aria-label="Manage the planet view"
      >
        <Tabs.Trigger
          className="px-6 py-3 aria-selected:border-b-4 aria-selected:text-white"
          value="overview"
        >
          OVERVIEW
        </Tabs.Trigger>
        <Tabs.Trigger
          className="px-6 py-3 aria-selected:border-b-4 aria-selected:text-white"
          value="structure"
        >
          STRUCTURE
        </Tabs.Trigger>
        <Tabs.Trigger
          className="px-6 py-3 aria-selected:border-b-4 aria-selected:text-white"
          value="surface"
        >
          SURFACE
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="col-start-1 row-start-2 grid min-h-[19rem] place-items-center transition-transform [&[data-state='inactive']]:translate-x-full"
        value="overview"
      >
        <Image
          alt={planetName}
          src={images.planet}
          width={111}
          height={111}
          sizes="111w"
        />
      </Tabs.Content>
      <Tabs.Content
        className="col-start-1 row-start-2 grid min-h-[19rem] place-items-center transition-transform [&[data-state='inactive']]:translate-x-full"
        value="structure"
      >
        <Image
          alt={`${planetName} internal view`}
          src={images.internal}
          width={111}
          height={111}
          sizes="111w"
        />
      </Tabs.Content>
      <Tabs.Content
        className=" col-start-1 row-start-2 grid min-h-[19rem] place-items-center transition-transform [&[data-state='inactive']]:translate-x-full"
        value="surface"
      >
        <div className="relative">
          <Image
            alt={planetName}
            src={images.planet}
            width={111}
            height={111}
            sizes="111w"
          />
          <Image
            alt={`${planetName} surface view`}
            src={images.geology}
            width={70}
            height={70}
            sizes="70w"
            className="absolute left-1/2 top-3/4 -translate-x-1/2"
          />
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
};
