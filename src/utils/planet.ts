import z from "zod";

export const planetSchema = z.enum([
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
] as const);

export type Planet = z.infer<typeof planetSchema>;
