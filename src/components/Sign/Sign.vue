<script setup lang="ts">
import { PhCaretLeft, PhGithubLogo, PhLinkedinLogo } from "@phosphor-icons/vue";
import { ref } from "vue";
import { vOnClickOutside } from '@vueuse/components'
const isActive = ref(false);
</script>

<template>
  <div
    class="flex w-[150px] right-0 fixed translate-x-[74px] justify-between items-center gap-1 p-2 bg-green-600 top-[50%] transition-all rounded-l-full cursor-pointer bg-gradient-to-br from-sky-500 from-10% to-emerald-500 to-90%"
    :class="{ '!translate-x-0': isActive }"
    @click="isActive = !isActive"
    v-on-click-outside="() => { isActive = false }"
    title="Developed by Maurício Cantú Jochims"
  >
    <PhCaretLeft
      class="shrink-0 animate-point text-zinc-900"
      weight="fill"
      :class="{ 'rotate-180 !animate-none': isActive }"
    />
    <span class="font-['Indie_Flower'] text-zinc-900 text-2xl"> mcj </span>
    <div class="flex items-center gap-2 ml-2">
      <a
        href="https://github.com/mauricio-cantu/spotify-clone"
        target="_blank"
        title="GitHub Project Page"
      >
        <PhGithubLogo
          weight="fill"
          class="text-zinc-800 hover:text-zinc-600"
          size="28"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/mauriciocantu"
        target="_blank"
        title="LinkedIn"
      >
        <PhLinkedinLogo
          weight="fill"
          class="text-zinc-800 hover:text-zinc-600"
          size="28"
        />
      </a>
    </div>
  </div>
</template>

<style></style>
