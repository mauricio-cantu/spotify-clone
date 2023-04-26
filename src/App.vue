<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import {
  PhBooks,
  PhCaretDown,
  PhCaretLeft,
  PhCaretRight,
  PhHeart,
  PhHouse,
  PhMagnifyingGlass,
  PhPlus,
  PhSpeakerHigh,
} from "@phosphor-icons/vue";
import { vOnClickOutside } from "@vueuse/components";
import { computed, onMounted, onUnmounted, ref } from "vue";
import {
  dailyItemsMock,
  jumpBackItemsMock,
  recentItemsMock,
} from "./assets/data";
import LogoIcon from "./assets/img/logo.svg?component";
import {
  CardsSection,
  Footer,
  PlayButton,
  Sign,
  ThemeSwitch,
} from "./components";
import { getImageUrl } from "./helpers";
import { CardItem, RecentItem } from "./models";
import { useUserStore } from "@/store/user";

const isMenuOpen = ref(false);
const scrollValue = ref(0);
const currentMainBackground = computed<string>(() => getGradientValue());
const recentItems = ref<RecentItem[]>(recentItemsMock);
const activeRecentItem = ref<RecentItem | null>(recentItems.value[0]);
const dailyItems = ref<CardItem[]>(dailyItemsMock);
const jumpBackItems = ref<CardItem[]>(jumpBackItemsMock);
const userStore = useUserStore();

const getGradientValue = (): string =>
  `linear-gradient(180deg, ${activeRecentItem.value?.bgColor} -42%, rgba(24,24,27,1) 25%)`;

const updateScroll = (): void => {
  scrollValue.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>

<template>
  <div class="flex flex-1 text-white h-full">
    <aside
      class="w-64 min-w-[16rem] bg-zinc-950 sticky h-screen top-0 hidden lg:block"
    >
      <div class="p-5">
        <a href="">
          <LogoIcon class="w-36" />
        </a>
        <nav class="mt-6">
          <ul class="space-y-4">
            <li class="text-sm text-white font-semibold">
              <a class="flex gap-3 items-center" href="">
                <PhHouse size="28" weight="fill" />
                Home
              </a>
            </li>
            <li class="text-sm text-gray-300 hover:text-white">
              <a class="flex gap-3 items-center" href="">
                <PhMagnifyingGlass size="28" />
                Search
              </a>
            </li>
            <li class="text-sm text-gray-300 hover:text-white">
              <a class="flex gap-3 items-center" href="">
                <PhBooks size="28" />
                Library
              </a>
            </li>
          </ul>
        </nav>

        <div class="mt-8 pl-1 space-y-5">
          <a
            class="flex gap-3 items-center text-sm text-gray-300 hover:text-white transition"
            href=""
          >
            <div
              class="flex items-center justify-center rounded bg-gray-400 p-1"
            >
              <span class="text-zinc-900">
                <PhPlus />
              </span>
            </div>
            <span>Create Playlist</span>
          </a>

          <a
            class="flex gap-3 items-center text-sm text-gray-300 hover:text-white transition"
            href=""
          >
            <div
              class="flex items-center justify-center rounded bg-gradient-to-br from-blue-800 via-blue-400 to-blue-100 p-1"
            >
              <span class="text-gray-200">
                <PhHeart weight="fill" />
              </span>
            </div>
            <span>Liked Songs</span>
            <span class="text-green-600 ml-auto">
              <PhSpeakerHigh weight="bold" size="20" />
            </span>
          </a>
        </div>

        <div class="mt-5 h-0.5 bg-neutral-700"></div>

        <div class="mt-3">
          <ul class="space-y-5 hover:cursor-default">
            <li class="text-sm text-gray-400 hover:text-white">Oldz</li>
            <li class="text-sm text-gray-400 hover:text-white">2023 🚀</li>
            <li class="text-sm text-gray-400 hover:text-white">MPB</li>
          </ul>
        </div>
      </div>
    </aside>
    <main
      id="main"
      class="flex-1 bg-zinc-900"
      :style="{ background: currentMainBackground }"
    >
      <div
        class="bg-transparent"
        :class="{ 'shadow-xl bg-zinc-800': scrollValue > 0 }"
      >
        <div
          class="flex items-center gap-4 p-3 md:p-6 sticky top-0 z-10 transition-colors max-w-screen-2xl mx-auto"
        >
          <button
            class="hidden lg:block rounded-full p-1 bg-zinc-900 text-white cursor-not-allowed"
          >
            <PhCaretLeft size="24" />
          </button>
          <button
            class="hidden lg:block rounded-full p-1 bg-zinc-900 text-white cursor-not-allowed"
          >
            <PhCaretRight size="24" />
          </button>

          <a href="" class="lg:hidden">
            <LogoIcon class="w-24" />
          </a>

          <button
            class="rounded-full relative ml-auto bg-zinc-900 transition p-[3px] pr-3 flex items-center gap-2"
            @click="isMenuOpen = !isMenuOpen"
            v-on-click-outside="
              () => {
                isMenuOpen = false;
              }
            "
          >
            <img
              class="h-8 w-8 rounded-full overflow-y-hidden"
              :src="userStore.photo"
              alt=""
            />

            <span class="text-white text-sm font-semibold">{{ userStore.name }}</span>

            <PhCaretDown
              weight="fill"
              class="transition-transform"
              :class="{ 'rotate-180': isMenuOpen }"
            />
            <Transition name="fade">
              <div
                class="p-1 bg-zinc-900 absolute top-[41px] w-[200px] rounded right-0 shadow-lg"
                v-if="isMenuOpen"
              >
                <ul>
                  <li
                    class="py-2 px-3 rounded text-sm cursor-default hover:bg-zinc-700 flex items-center"
                  >
                    Account
                  </li>
                  <li
                    class="py-2 px-3 rounded text-sm cursor-default hover:bg-zinc-700 flex items-center"
                  >
                    Profile
                  </li>
                  <li
                    class="py-2 px-3 rounded text-sm cursor-default hover:bg-zinc-700 flex items-center"
                  >
                    Settings
                  </li>
                  <li class="h-[1px] w-full bg-gray-600 my-1"></li>
                  <li
                    class="py-2 px-3 rounded text-sm cursor-default hover:bg-zinc-700 flex items-center"
                  >
                    Log out
                  </li>
                </ul>
              </div>
            </Transition>
          </button>
        </div>
      </div>
      <div class="px-3 md:px-6 py-3 pb-40 max-w-screen-2xl mx-auto">
        <div class="flex justify-between items-center">
          <h1 class="text-white text-3xl font-bold">Good evening</h1>
          <ThemeSwitch />
        </div>

        <div class="grid grid-cols-2 xl:grid-cols-3 mt-5">
          <div
            class="p-1 lg:p-3"
            v-for="(item, index) in recentItems"
            :key="index"
            @mouseover="activeRecentItem = item"
          >
            <div
              class="overflow-hidden cursor-pointer bg-gray-600/30 rounded text-white text-sm lg:text-lg font-semibold hover:bg-gray-600/60 transition flex items-center gap-2 md:gap-4 group pr-4 lg:pr-0"
            >
              <div
                class="w-14 h-14 min-w-[3.5rem] lg:w-20 lg:h-20 lg:min-w-[5rem] shadow-[3px_0px_12px_-5px_rgba(0,0,0,0.64)]"
              >
                <img :src="getImageUrl(item.assetUrl)" />
              </div>
              <span class="line-clamp-2">{{ item.title }}</span>
              <PlayButton
                icon-size="23"
                class="transition mr-5 ml-auto opacity-0 hidden lg:block group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        <CardsSection
          :cards="dailyItems"
          :title="`Made for ${userStore.name}`"
          class="mt-7"
        />

        <CardsSection
          :cards="jumpBackItems"
          :title="'Jump back in'"
          class="mt-7"
        />
      </div>
    </main>
  </div>
  <Footer />
  <Sign />
</template>

<style lang="scss"></style>
