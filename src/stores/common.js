import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    sidebar: true,
    pageName: "Overview",
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    ShowHideSidebar() {
      this.sidebar = !this.sidebar;
    },
    changeName(name) {
      this.pageName = name;
    },
  },
});
