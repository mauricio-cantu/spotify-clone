<script setup lang="ts">
import { PhMoon, PhSun } from "@phosphor-icons/vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    class="rounded-full border-2 relative w-[60px] h-[33px] border-zinc-800 dark:border-gray-200 transition-all"
    @click="toggleDark()"
  >
    <div
      class="flex text-xs items-center justify-center absolute top-[2px] left-[2px] transition-all rounded-full w-[24px] h-[24px] bg-zinc-800 translate-x-0 dark:bg-gray-200 dark:translate-x-[27px]"
    >
      <component
        size="18"
        weight="fill"
        :is="isDark ? PhMoon : PhSun"
        class="text-gray-200 dark:text-zinc-800"
      />
    </div>
  </button>
</template>

<style lang="scss"></style>
