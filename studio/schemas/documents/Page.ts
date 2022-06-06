export default {
  type: "document",
  name: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: (doc, options) => options.parent.title,
      },
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      description: "Add, edit, and reorder sections",
      of: [
        { type: "Hero" },
        { type: "Grid" },
        { type: "Testimonial" },
        { type: "Text" },
      ],
    },
  ],
};
