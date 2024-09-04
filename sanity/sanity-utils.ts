import { ProjectType } from "@/types/project";
import client from "./config/client-config";
import { groq } from "next-sanity";

export async function getProjects(): Promise<ProjectType[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      name,
    "slug": slug.current,
    "image":image.asset->url,
    "alt":image.alt,
    url,
    content,
    _createdAt
    }`
  );
}

export async function getProject(slug: string): Promise<ProjectType> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
    "slug": slug.current,
    "image":image.asset->url,
    "alt":image.alt,
    url,
    content,
    _createdAt
    }`,
    { slug }
  );
}
