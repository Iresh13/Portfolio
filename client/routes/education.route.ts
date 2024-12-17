import { sanityService } from "@/services/sanity.service";
import groq from "groq";

const fetchEducationQuery = groq`*[_type == "education"]{
    ...,
  }`;

export async function fetchEducation() {
  return await sanityService.fetch(fetchEducationQuery);
}
