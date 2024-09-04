import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY || "",
  dataset: "production",
  apiVersion: "2024-05-08",
  useCdn: false,
});

export default client