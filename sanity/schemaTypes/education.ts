import { defineField, defineType } from "sanity";

export const education = defineType({
  type: "document",
  name: "education",
  title: "Education",
  fields: [
    defineField({
      type: "string",
      description: "Institution",
      title: "Institution",
      name: "institution",
    }),
    defineField({
      type: "string",
      description: "Degree",
      title: "Degree",
      name: "degree",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "institution",
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
  ],
});
