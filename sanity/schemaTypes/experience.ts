import { defineArrayMember, defineField, defineType } from "sanity";

export const experience = defineType({
  type: "document",
  name: "experience",
  title: "Experience",
  fields: [
    defineField({
      type: "string",
      description: "Workplace",
      title: "Workplace",
      name: "workplace",
    }),
    defineField({
      type: "string",
      description: "Position",
      title: "Position",
      name: "position",
    }),
    defineField({
      type: "string",
      description: "Url",
      title: "Url",
      name: "Url",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "workplace",
        maxLength: 280,
      },
    }),
    defineField({
      type: "string",
      description: "start date",
      title: "start date",
      name: "start_date",
    }),
    defineField({
      type: "string",
      description: "end date",
      title: "end date",
      name: "end_date",
    }),
    defineField({
      type: "string",
      description: "location",
      title: "location",
      name: "location",
    }),
    defineField({
      type: "markdown",
      name: "description_content",
      title: "Description Content",
      description: "Description that is displayed",
    }),
    defineField({
      type: "array",
      name: "technologies_used",
      title: "technologies used",
      description: "Technologies",
      of: [
        defineArrayMember({
          type: "experienceOption",
        }),
      ],
    }),
  ],
});
