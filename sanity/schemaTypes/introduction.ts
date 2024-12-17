import { defineField, defineType } from "sanity";

export const introduction = defineType({
  type: "document",
  name: "introduction",
  title: "Introduction",
  fields: [
    defineField({
      type: "string",
      description: "Name",
      title: "Name",
      name: "name",
    }),
    defineField({
      type: "string",
      description: "short_description",
      title: "short_description",
      name: "short_description",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "name",
        maxLength: 280,
      },
    }),
    defineField({
      type: "string",
      description: "position",
      title: "position",
      name: "position",
    }),
    defineField({
      type: "markdown",
      name: "description_content",
      title: "Description Content",
      description: "Description that is displayed",
    }),
    defineField({
      title: "preview",
      description: "preview",
      name: "preview",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    }),
  ],
});
