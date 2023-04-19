import { Header } from "@/components/Header";
import { PlanetDetails } from "@/components/PlanetDetails";
import { PlanetViews } from "@/components/PlanetViews";
import { planetNameSchema } from "@/utils/planet";
import { notFound } from "next/navigation";

interface PlanetPageProps {
  params: {
    planetName: string;
  };
}

const PlanetPage = ({ params }: PlanetPageProps) => {
  const parsing = planetNameSchema.safeParse(params.planetName);
  if (!parsing.success) notFound();

  return (
    <>
      <Header planetName={parsing.data} />
      <main className="w-full flex-grow">
        <PlanetViews planetName={parsing.data} />
        <PlanetDetails planetName={parsing.data} className="px-6" />
      </main>
    </>
  );
};

export default PlanetPage;
