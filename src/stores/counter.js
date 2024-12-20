import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  // State (data)
  state: () => ({
    count: 0,
  }),

  // Getters (computed properties)
  getters: {
    doubleCount: (state) => state.count * 2,
  },

  // Actions (methods)
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
