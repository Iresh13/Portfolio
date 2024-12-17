import { sanityService } from "@/services/sanity.service";
import groq from "groq";

const fetchExperienceQuery = groq`*[_type == "experience"]{
    ...,
  }`;

export async function fetchExperience() {
  return await sanityService.fetch(fetchExperienceQuery);
}
