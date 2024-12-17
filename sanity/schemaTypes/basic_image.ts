import { defineField } from "sanity";

export const basicImage = defineField({
  title: "Basic image",
  name: "basic_image",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Image name",
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
      title: "Image content",
      name: "basic_image_asset",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
      ],
    }),
  ],
});
