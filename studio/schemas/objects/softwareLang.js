export default {
  name: "softwareLang",
  title: "Language",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "icon",
      title: "Icon",
      type: "figure"
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "icon"
    }
  }
};
