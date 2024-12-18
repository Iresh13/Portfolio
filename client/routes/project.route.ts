import { sanityService } from "@/services/sanity.service";
import groq from "groq";

const fetchProjectQuery = groq`*[_type == "project"]{
...,
     "image_url": preview.asset->url,
  }`;

export async function fetchProject() {
  return await sanityService.fetch(fetchProjectQuery);
}
