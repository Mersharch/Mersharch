import { PortableTextBlock } from "next-sanity";

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  alt: string;
  url: string;
  content: PortableTextBlock[];
  _createdAt: string;
};
