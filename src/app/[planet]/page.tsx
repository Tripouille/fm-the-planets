import { PlanetDetails } from "@/components/PlanetDetails";
import { PlanetViews } from "@/components/PlanetViews";
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
      <PlanetViews planetName={parsing.data} />
      <PlanetDetails planetName={parsing.data} className="px-6" />
    </>
  );
};

export default PlanetPage;
