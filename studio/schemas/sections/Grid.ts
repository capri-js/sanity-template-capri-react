export default {
  name: "Grid",
  type: "object",
  title: "Grid",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "items",
      type: "array",
      of: [{ type: "GridItem" }],
    },
  ],
};
