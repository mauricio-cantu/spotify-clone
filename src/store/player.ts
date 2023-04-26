import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("player", () => {
  const isPlaying = ref(false);
  const isShuffleActive = ref(false);
  const isRepeatActive = ref(false);
  const isFullscreenEnabled = ref(false);

  function toggleFullscreen(): void {
    isFullscreenEnabled.value = !isFullscreenEnabled.value;
  }

  return { isPlaying, isShuffleActive, isFullscreenEnabled, isRepeatActive, toggleFullscreen };
});
