import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      isMenuOpen: false,
    };
  },
  actions: {
    handleOpenMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
