<script setup lang="ts">
import { PhPlay } from "@phosphor-icons/vue";
import { CardItem } from "../../models";
import { getImageUrl } from "../../helpers";
import { PlayButton } from "..";

defineProps<{
  title: string;
  cards: CardItem[];
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="mb-6 flex justify-between items-center">
      <a href="">
        <h2 class="text-white text-2xl font-semibold hover:underline">
          {{ title }}
        </h2>
      </a>
    </div>

    <div class="flex items-center gap-5 flex-wrap">
      <div
        class="rounded w-36 h-60 p-2 lg:w-52 lg:h-72 lg:p-4 flex flex-col gap-3 bg-zinc-800 hover:bg-zinc-700 transition-colors text-white cursor-pointer group"
        v-for="(item, index) in cards"
        :key="index"
      >
        <div class="rounded overflow-hidden relative">
          <img :src="getImageUrl(item.assetUrl)" class="w-32 h-32 lg:w-48 lg:h-44" />
          <PlayButton
            class="absolute transition bottom-0.5 right-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3"
          />
        </div>
        <span class="text-white font-semibold line-clamp-1">
          {{ item.title }}
        </span>
        <span v-if="item.subtitle" class="text-gray-300 line-clamp-2">
          {{ item.subtitle }}
        </span>
      </div>
    </div>
  </div>
</template>

<style></style>
