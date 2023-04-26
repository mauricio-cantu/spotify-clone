<script setup lang="ts">
import { getImageUrl } from "@/helpers";
import {
  PhPictureInPicture,
  PhHeart,
  PhShuffle,
  PhSkipBack,
  PhSkipForward,
  PhRepeat,
  PhMicrophoneStage,
  PhQueue,
  PhSpeakerHigh,
  PhDevices,
  PhHouse,
  PhMagnifyingGlass,
  PhBooks,
  PhArrowsInSimple,
  PhArrowsOutSimple,
  PhPauseCircle,
  PhPlayCircle
} from "@phosphor-icons/vue";
import { usePlayerStore } from "@/store/player";

const playerStore = usePlayerStore()
</script>

<template>
  <footer
    class="fixed bottom-0 w-full bg-zinc-900 text-white p-2 gap-3 lg:gap-0 lg:p-4 border-t border-neutral-800 flex flex-col lg:flex-row justify-between items-center"
  >
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-3">
        <img
          :src="getImageUrl('innerspeaker-album.jpg')"
          class="rounded-md w-11 h-11 lg:w-14 lg:h-14"
        />
        <div class="flex flex-col gap-1 mr-4">
          <a
            class="text-white text-sm line-clamp-1 hover:underline cursor-pointer"
            >Expectation</a
          >
          <a class="text-gray-400 text-xs hover:underline cursor-pointer"
            >Tame Impala</a
          >
        </div>
        <button class="hidden lg:block text-green-600">
          <PhHeart size="18" weight="fill" />
        </button>
        <button class="hidden lg:block text-gray-400 hover:text-white">
          <PhPictureInPicture size="18" />
        </button>
      </div>

      <div
        class="flex-col gap-2 items-center justify-center w-2/4 hidden lg:flex"
      >
        <div class="flex gap-5">
          <button
            @click="playerStore.isShuffleActive = !playerStore.isShuffleActive"
            class="text-gray-400"
            :class="playerStore.isShuffleActive ? 'text-green-500' : 'hover:text-white'"
          >
            <PhShuffle size="22" />
          </button>

          <button class="text-gray-400 hover:text-white">
            <PhSkipBack weight="fill" size="22" />
          </button>

          <button
            @click="playerStore.isPlaying = !playerStore.isPlaying"
            class="transition-transform hover:scale-110"
          >
            <component
              :is="playerStore.isPlaying ? PhPauseCircle : PhPlayCircle"
              weight="fill"
              size="40"
            />
          </button>

          <button class="text-gray-400 hover:text-white">
            <PhSkipForward weight="fill" size="22" />
          </button>

          <button
            @click="playerStore.isRepeatActive = !playerStore.isRepeatActive"
            class="text-gray-400"
            :class="playerStore.isRepeatActive ? 'text-green-500' : 'hover:text-white'"
          >
            <PhRepeat size="22" />
          </button>
        </div>

        <div
          class="flex items-center justify-center gap-3 w-full max-w-screen-lg"
        >
          <span class="text-xs text-gray-300">3:42</span>
          <div class="h-1 w-[70%] bg-gray-700 rounded group">
            <div
              class="w-[42%] h-full bg-white rounded group-hover:bg-green-500 relative after:rounded-full after:h-3 after:w-3 after:-top-1 after:-right-1 after:bg-white after:absolute after:invisible group-hover:after:visible"
            ></div>
          </div>

          <span class="text-xs text-gray-300">7:51</span>
        </div>
      </div>

      <div class="items-center gap-3 hidden lg:flex">
        <button class="text-gray-400 hover:text-white">
          <PhMicrophoneStage size="18" />
        </button>
        <button class="text-gray-400 hover:text-white">
          <PhQueue size="18" />
        </button>
        <button class="text-gray-400 hover:text-white">
          <PhDevices size="18" />
        </button>
        <button class="text-gray-400 hover:text-white">
          <PhSpeakerHigh size="18" />
        </button>
        <button
          class="text-gray-400 hover:text-white"
          @click="playerStore.toggleFullscreen()"
        >
          <component
            :is="playerStore.isFullscreenEnabled ? PhArrowsInSimple : PhArrowsOutSimple"
            size="18"
          />
        </button>
      </div>
      <div class="items-center gap-3 flex lg:hidden">
        <button class="text-green-600">
          <PhHeart size="22" weight="fill" />
        </button>
        <button class="text-gray-400 hover:text-white">
          <PhDevices size="22" />
        </button>
        <button
          @click="playerStore.isPlaying = !playerStore.isPlaying"
          class="transition-transform hover:scale-110"
        >
          <component
            :is="playerStore.isPlaying ? PhPauseCircle : PhPlayCircle"
            weight="fill"
            size="40"
          />
        </button>
      </div>
    </div>

    <div class="h-1 w-full bg-gray-700 rounded group lg:hidden">
      <div
        class="w-[42%] h-full bg-white rounded group-hover:bg-green-500 relative after:rounded-full after:h-3 after:w-3 after:-top-1 after:-right-1 after:bg-white after:absolute after:invisible group-hover:after:visible"
      ></div>
    </div>
    <div class="flex items-center justify-around py-1 lg:hidden w-full">
      <button
        class="text-white hover:text-white flex flex-col gap-1 items-center"
      >
        <PhHouse size="28" />
        <span class="text-xs">Home</span>
      </button>
      <button
        class="text-gray-400 hover:text-white flex flex-col gap-1 items-center"
      >
        <PhMagnifyingGlass size="28" />
        <span class="text-xs">Search</span>
      </button>
      <button
        class="text-gray-400 hover:text-white flex flex-col gap-1 items-center"
      >
        <PhBooks size="28" />
        <span class="text-xs">Library</span>
      </button>
    </div>
  </footer>
</template>

<style></style>
