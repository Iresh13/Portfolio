import { sanityService } from "@/services/sanity.service";
import groq from "groq";

const fetchIntroductionQuery = groq`*[_type == "introduction"][0]{
    ...,
  }`;

export async function fetchIntroduction() {
  return await sanityService.fetch(fetchIntroductionQuery);
}
