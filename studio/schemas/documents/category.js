export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      options: {
        isUnique: true
      }
    },
    {
      name: "description",
      type: "text",
      title: "Description"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug"
    }
  ]
};
