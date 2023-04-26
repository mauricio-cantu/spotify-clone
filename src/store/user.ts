import { defineStore } from "pinia";
import { ref } from "vue";
import { getImageUrl } from "@/helpers";

export const useUserStore = defineStore("user", () => {
  const name = ref('Maurício Cantú');
  const photo = ref(getImageUrl('me.png'));

  return { name, photo };
});
