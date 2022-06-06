export default {
  name: "Testimonial",
  type: "object",
  fields: [
    {
      name: "quote",
      type: "string",
      title: "Quote",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "info",
      type: "string",
      title: "Info",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "quote",
    },
  },
};
