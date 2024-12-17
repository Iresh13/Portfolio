import { defineType, defineField } from "sanity";

export const experienceOption = defineType({
  type: "object",
  name: "experienceOption",
  title: "Experience Option",
  fields: [
    defineField({
      type: "string",
      description: "Built With",
      title: "Built With",
      name: "built_with",
    }),
  ],
});
