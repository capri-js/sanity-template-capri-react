export default {
  type: "document",
  name: "Menu",
  title: "Menu",
  fields: [
    {
      name: "items",
      type: "array",
      title: "Menu items",
      description: "Add, edit, and reorder pages",
      of: [
        {
          type: "reference",
          to: [{ type: "Page" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "_id",
    },
    prepare({ title }) {
      return {
        title: title.replace("drafts.", ""),
      };
    },
  },
};
