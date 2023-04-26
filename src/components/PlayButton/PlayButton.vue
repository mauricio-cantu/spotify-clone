<script setup lang="ts">
import { PhPlay } from '@phosphor-icons/vue';

withDefaults(
  defineProps<{
    iconSize?: string;
  }>(),
  { iconSize: "21" }
);
</script>

<template>
  <button
    class="rounded-full bg-green-500 shadow-lg p-3 lg:block hover:scale-105"
  >
    <PhPlay weight="fill" class="text-black" :size="iconSize" />
  </button>
</template>

<style></style>
