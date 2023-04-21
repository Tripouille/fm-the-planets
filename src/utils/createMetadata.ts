import { Metadata } from "next";

export interface CreateMetadataParams {
  title: string;
  description: string;
  type: "website" | "article";
  images?: string[];
}

export const createMetadata = ({
  type,
  title,
  description,
  images,
}: CreateMetadataParams): Metadata => {
  const imagesWithBaseURL = images?.map(
    (image) => `https://the-planets.jgambard.me}${image}`
  );
  const titleWithSiteName = `${title} - The planets`;
  const openGraphImages = imagesWithBaseURL?.map((image) => ({ url: image }));

  return {
    title: titleWithSiteName,
    description,
    openGraph: {
      type,
      title: titleWithSiteName,
      description,
      locale: "en",
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithSiteName,
      description,
      images: imagesWithBaseURL,
    },
  };
};
