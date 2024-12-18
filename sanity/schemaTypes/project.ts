import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  type: "document",
  name: "project",
  title: "Project",
  fields: [
    defineField({
      type: "string",
      description: "projectName",
      title: "projectName",
      name: "projectName",
    }),
    defineField({
      type: "string",
      description: "link",
      title: "link",
      name: "link",
    }),
    defineField({
      type: "string",
      description: "platform",
      title: "platform",
      name: "platform",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "projectName",
        maxLength: 280,
      },
    }),
    defineField({
      type: "boolean",
      name: "visible",
      title: "visible",
      description: "platform",
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
