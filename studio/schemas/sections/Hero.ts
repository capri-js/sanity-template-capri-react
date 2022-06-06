export default {
  name: "Hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "text",
    },
  },
};
