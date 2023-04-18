import { PlanetDetails } from "@/components/PlanetDetails";
import { PlanetTabs } from "@/components/PlanetTabs";
import { planetNameSchema } from "@/utils/planet";
import { notFound } from "next/navigation";

interface PlanetPageProps {
  params: {
    planet: string;
  };
}

const PlanetPage = ({ params }: PlanetPageProps) => {
  const parsing = planetNameSchema.safeParse(params.planet);
  if (!parsing.success) notFound();

  return (
    <>
      <PlanetTabs planetName={parsing.data} />
      <PlanetDetails planetName={parsing.data} />
    </>
  );
};

export default PlanetPage;
