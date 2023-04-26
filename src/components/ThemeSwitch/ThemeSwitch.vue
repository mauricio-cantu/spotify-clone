<script setup lang="ts">
import { PhMoon, PhSun } from "@phosphor-icons/vue";
import { useDark, useToggle } from "@vueuse/core";
import { nextTick, ref, watch } from "vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const _isDark = ref(isDark.value);

watch(isDark, (value) => {
  nextTick(() => {
    // properly triggers DOM update and transition
    _isDark.value = value;
  });
});
</script>

<template>
  <button
    class="rounded-full border-2 relative w-[60px] h-[33px] border-zinc-800 dark:border-gray-200 transition-all"
    @click="toggleDark()"
  >
    <div
      class="flex transition-all duration-200 text-xs items-center justify-center absolute top-[2px] left-[2px] rounded-full w-[24px] h-[24px] bg-zinc-800 translate-x-0 dark:bg-gray-200"
      :class="{ 'translate-x-[27px]': _isDark }"
    >
      <component
        size="18"
        weight="fill"
        :is="_isDark ? PhMoon : PhSun"
        class="text-gray-200 dark:text-zinc-800 transition"
      />
    </div>
  </button>
</template>

<style lang="scss"></style>
