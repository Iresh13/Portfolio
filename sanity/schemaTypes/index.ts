import { type SchemaTypeDefinition } from "sanity";
import { experience } from "./experience";
import { experienceOption } from "./experience_option";
import { basicImage } from "./basic_image";
import { project } from "./project";
import { introduction } from "./introduction";
import { education } from "./education";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    experience,
    experienceOption,
    basicImage,
    project,
    introduction,
    education,
  ],
};
