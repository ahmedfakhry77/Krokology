import { defineStore } from "pinia";

export const useCarouselStore = defineStore("carousel", {
  state: () => ({
    items: [
      {
        title: "Anthony",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.",
        company: "ABC Company",
      },
      {
        title: "Anthony",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.",
        company: "ABC Company",
      },
      {
        title: "Anthony",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.",
        company: "ABC Company",
      },
      {
        title: "Anthony",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.",
        company: "ABC Company",
      },
    ],
  }),
  actions: {
    addItem(item) {
      this.items.push(item);
    },
  },
});
