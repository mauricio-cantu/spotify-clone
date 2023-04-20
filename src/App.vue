<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import { PhArrowsInSimple, PhArrowsOutSimple, PhBooks, PhCaretDown, PhCaretLeft, PhCaretRight, PhCaretUp, PhDevices, PhHeart, PhHouse, PhMagnifyingGlass, PhMicrophone, PhMicrophoneStage, PhPauseCircle, PhPictureInPicture, PhPlay, PhPlayCircle, PhPlus, PhQueue, PhRepeat, PhShuffle, PhSkipBack, PhSkipForward, PhSpeakerHigh } from '@phosphor-icons/vue';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import LogoIcon from './assets/logo.svg?component';
import { CardItem, RecentItem } from './models';
const isMenuOpen = ref(false);
const isShuffleActive = ref(false);
const isRepeatActive = ref(false);
const scrollValue = ref(0)
const currentMainBackground = computed<string>(() => getGradientValue());
const isFullscreenEnabled = ref(false);
const getGradientValue = (): string => `linear-gradient(180deg, ${activeRecentItem.value?.bgColor} -42%, rgba(24,24,27,1) 25%)`

const isPlaying = ref(false)

const recentItems = ref<RecentItem[]>([
  { title: 'Currents', assetUrl: 'currents-album.jpg', bgColor: '#a93ceb' },
  { title: 'Innerspeaker', assetUrl: 'innerspeaker-album.jpg', bgColor: '#81aecf' },
  { title: 'IGOR', assetUrl: 'igor-album.jpg', bgColor: '#e5a4da' },
  { title: 'Testing', assetUrl: 'testing-album.jpeg', bgColor: '#f4ff1c' },
  { title: 'Astroworld', assetUrl: 'astroworld-album.jpg', bgColor: '#a19838' },
  { title: 'Babylon By Gus Vol. 1 - O Ano do Macaco', assetUrl: 'bbg-vol1.jpg', bgColor: '#d4823b' }
])

const activeRecentItem = ref<RecentItem | null>(recentItems.value[0]);

const dailyItems = ref<CardItem[]>([
  { title: 'Daily Mix 1', subtitle: '21 savage, Post Malone, Kendrick Lamar and more', assetUrl: 'daily-1.jpeg' },
  { title: 'Daily Mix 2', subtitle: 'BK, Cacife Clandestino and more', assetUrl: 'daily-2.jpeg' },
  { title: 'Daily Mix 3', subtitle: 'Declaime, Bring Me The Horizon, Cage the Elephant and more', assetUrl: 'daily-3.jpeg' },
  { title: 'Daily Mix 4', subtitle: 'Oriente, NX Zero, Natiruts and more', assetUrl: 'daily-4.jpeg' },
  { title: 'Release Radar', subtitle: 'Catch all the latest music from artists you like', assetUrl: 'daily-6.jpeg' },
])

const jumpBackItems = ref<CardItem[]>([
  { title: 'CALL ME IF YOU GET LOST: The Estate Sale', subtitle: 'Tyler, The Creator', assetUrl: 'ciygl-album.jpg' },
  { title: 'Lonerism', subtitle: 'Tame Impala', assetUrl: 'lonerism-album.jpg' },
  { title: 'The Marshall Mathers LP 2', subtitle: 'Eminem', assetUrl: 'mmlp2-album.jpg' },
  { title: 'The Dark Side of the Moon', subtitle: 'Pink Floyd', assetUrl: 'dsotm-album.jpeg' },
  { title: 'Roteiro Pra Aïnouz, Vol. 3', subtitle: 'Don L', assetUrl: 'rpa3-album.png' },
])

const updateScroll = (): void => {
  scrollValue.value = window.scrollY;
}

const getImageUrl = (fileName: string): string => {
  return new URL(`./assets/${fileName}`, import.meta.url).href;
}

function toggleFullscreen(): void {
  isFullscreenEnabled.value = !isFullscreenEnabled.value;
}


onMounted(() => { window.addEventListener('scroll', updateScroll) })
onUnmounted(() => { window.removeEventListener('scroll', updateScroll) })

</script>

<template>
  <div class="flex flex-1 text-white h-full ">
    <aside class="w-64 min-w-[16rem] bg-zinc-950 sticky h-screen top-0 hidden lg:block">
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
            <li class="text-sm text-gray-300  hover:text-white">
              <a class="flex gap-3 items-center" href="">
                <PhMagnifyingGlass size="28" />
                Search
              </a>
            </li>
            <li class="text-sm text-gray-300  hover:text-white">
              <a class="flex gap-3 items-center" href="">
                <PhBooks size="28" />
                Library
              </a>
            </li>
          </ul>
        </nav>

        <div class="mt-8 pl-1 space-y-5">
          <a class="flex gap-3 items-center text-sm  text-gray-300 hover:text-white transition" href="">
            <div class="flex items-center justify-center rounded bg-gray-400 p-1">
              <span class="text-zinc-900">
                <PhPlus />
              </span>
            </div>
            <span>Create Playlist</span>
          </a>

          <a class="flex gap-3 items-center text-sm  text-gray-300 hover:text-white transition" href="">
            <div
              class="flex items-center justify-center rounded bg-gradient-to-br from-blue-800 via-blue-400 to-blue-100 p-1">
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
    <main id="main" class="flex-1 bg-zinc-900" :style="{ background: currentMainBackground }">


      <div class="flex items-center gap-4 p-3 md:p-6 sticky top-0 z-10 transition-colors bg-transparent max-w-screen-2xl mx-auto"
        :class="{ 'shadow-xl bg-zinc-800': (scrollValue > 0) }">
        <button class="hidden lg:block rounded-full p-1 bg-zinc-900 text-white cursor-not-allowed">
          <PhCaretLeft size="24" />
        </button>
        <button class="hidden lg:block rounded-full p-1 bg-zinc-900 text-white cursor-not-allowed">
          <PhCaretRight size="24" />
        </button>

        <a href="" class="lg:hidden">
          <LogoIcon class="w-24" />
        </a>

        <button class="rounded-full bg-zinc-900 transition ml-auto p-[3px] pr-3 flex items-center gap-2 relative"
          @click="isMenuOpen = !isMenuOpen">
          <img class="h-8 w-8 rounded-full overflow-y-hidden" :src="getImageUrl('me.png')" alt="">

          <span class="text-white text-sm font-semibold">Maurício Cantú</span>

          <PhCaretDown weight="fill" class="transition-transform duration-300" :class="{ 'rotate-180': isMenuOpen }" />
          <div
            class="p-1 bg-zinc-900 absolute top-[30px] w-[200px] rounded right-0 shadow-lg opacity-0 transition duration-300"
            :class="isMenuOpen ? 'opacity-100 visible translate-y-3' : 'invisible'">
            <ul>
              <li class="py-2 px-3 rounded text-sm cursor-default  hover:bg-zinc-700 flex items-center">Account</li>
              <li class="py-2 px-3 rounded text-sm cursor-default hover:bg-zinc-700 flex items-center">Profile</li>
              <li class="py-2 px-3 rounded text-sm cursor-default  hover:bg-zinc-700 flex items-center">Settings</li>
              <li class="h-[1px] w-full bg-gray-600 my-1"></li>
              <li class="py-2 px-3 rounded text-sm cursor-default  hover:bg-zinc-700 flex items-center">Log out</li>
            </ul>
          </div>
        </button>
      </div>

      <div class="px-3 md:px-6 py-3 pb-48 max-w-screen-2xl mx-auto">

        <h1 class="text-white text-3xl font-bold">Good evening</h1>

        <div class="grid grid-cols-2 xl:grid-cols-3 mt-5">
          <div class="p-1 lg:p-3" v-for="(item, index) in recentItems" :key="index" @mouseover="activeRecentItem = item">
            <div
              class="overflow-hidden cursor-pointer bg-gray-600/30 rounded text-white text-sm lg:text-lg font-semibold hover:bg-gray-600/60 transition flex items-center gap-2 md:gap-4 group pr-4 lg:pr-0">
              <div
                class="w-14 h-14 min-w-[3.5rem] lg:w-20 lg:h-20 lg:min-w-[5rem] shadow-[3px_0px_12px_-5px_rgba(0,0,0,0.64)]">
                <img :src="getImageUrl(item.assetUrl)">
              </div>
              <span class="line-clamp-2">{{ item.title }}</span>
              <button
                class="rounded-full duration-300 transition bg-green-500 shadow-lg p-3 mr-5 ml-auto opacity-0 hidden lg:block group-hover:opacity-100 hover:scale-105">
                <PhPlay weight="fill" class="text-black" size="23" />
              </button>
            </div>
          </div>
        </div>

        <div class="mt-7 mb-6 flex justify-between items-center pr-4">
          <a href="">
            <h2 class="text-white text-2xl font-semibold hover:underline">Made for Mauricio Cantú</h2>
          </a>
        </div>

        <div class="flex items-center gap-5 flex-wrap">
          <div
            class="rounded w-48 p-4 flex flex-col gap-3 bg-zinc-800 hover:bg-zinc-700 transition-colors text-white cursor-pointer group"
            v-for="(item, index) in dailyItems" :key="index">
            <div class="rounded overflow-hidden flex-1 relative">
              <img :src="getImageUrl(item.assetUrl)">
              <button
                class="absolute duration-300 bottom-0.5 right-2 rounded-full transition bg-green-500 p-3 opacity-0 shadow-lg group-hover:opacity-100 hover:scale-105 group-hover:-translate-y-2">
                <PhPlay weight="fill" class="text-black" size="21" />
              </button>
            </div>
            <span class="text-white font-semibold line-clamp-1">
              {{ item.title }}
            </span>
            <span v-if="item.subtitle" class=" text-gray-300 line-clamp-2">
              {{ item.subtitle }}
            </span>
          </div>

        </div>

        <div class="mt-7 mb-6 flex justify-between items-center pr-4">
          <a href="">
            <h2 class="text-white text-2xl font-semibold hover:underline">Jump back in</h2>
          </a>
        </div>

        <div class="flex items-center gap-5 flex-wrap">
          <div
            class="rounded w-48 p-4 flex flex-col gap-3 bg-zinc-800 hover:bg-zinc-700 transition-colors text-white cursor-pointer group"
            v-for="(item, index) in jumpBackItems" :key="index">
            <div class="rounded overflow-hidden flex-1 relative">
              <img :src="getImageUrl(item.assetUrl)">
              <button
                class="absolute duration-300 bottom-0.5 right-2 rounded-full transition bg-green-500 p-3 opacity-0 shadow-lg group-hover:opacity-100 hover:scale-105 group-hover:-translate-y-2">
                <PhPlay weight="fill" class="text-black" size="21" />
              </button>
            </div>
            <span class="text-white font-semibold line-clamp-1">
              {{ item.title }}
            </span>
            <span v-if="item.subtitle" class=" text-gray-300 line-clamp-2">
              {{ item.subtitle }}
            </span>
          </div>

        </div>
      </div>


    </main>
  </div>
  <footer
    class="fixed bottom-0 w-full bg-zinc-900 text-white p-2 gap-3 lg:gap-0 lg:p-4 border-t border-neutral-800 flex flex-col lg:flex-row justify-between items-center">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-3">
        <img :src="getImageUrl('innerspeaker-album.jpg')" class="rounded-md w-11 h-11 lg:w-14 lg:h-14" />
        <div class="flex flex-col gap-1 mr-4">
          <a class="text-white text-sm line-clamp-1 hover:underline cursor-pointer">Expectation</a>
          <a class="text-gray-400 text-xs hover:underline cursor-pointer">Tame Impala</a>
        </div>
        <button class="hidden lg:block text-green-600">
          <PhHeart size="18" weight="fill" />
        </button>
        <button class="hidden lg:block text-gray-400 hover:text-white">
          <PhPictureInPicture size="18" />
        </button>
      </div>

      <div class="flex-col gap-2 items-center justify-center w-2/4 hidden lg:flex">
        <div class="flex gap-5">
          <button @click="isShuffleActive = !isShuffleActive" class="text-gray-400"
            :class="{ 'text-green-500': isShuffleActive, 'hover:text-white': !isShuffleActive }">
            <PhShuffle size="22" />
          </button>

          <button class="text-gray-400 hover:text-white">
            <PhSkipBack weight="fill" size="22" />
          </button>

          <button @click="isPlaying = !isPlaying" class="transition-transform hover:scale-110">
            <component :is="isPlaying ? PhPauseCircle : PhPlayCircle" weight="fill" size="40" />
          </button>

          <button class="text-gray-400 hover:text-white">
            <PhSkipForward weight="fill" size="22" />
          </button>

          <button @click="isRepeatActive = !isRepeatActive" class="text-gray-400 "
            :class="{ 'text-green-500': isRepeatActive, 'hover:text-white': !isRepeatActive }">
            <PhRepeat size="22" />
          </button>
        </div>

        <div class="flex items-center justify-center gap-3 w-full max-w-screen-lg">
          <span class="text-xs text-gray-300">3:42</span>
          <div class="h-1 w-[70%] bg-gray-700 rounded group">
            <div
              class="w-[42%] h-full bg-white rounded group-hover:bg-green-500 relative after:rounded-full after:h-3 after:w-3 after:-top-1 after:-right-1 after:bg-white after:absolute after:invisible group-hover:after:visible">
            </div>
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
        <button class="text-gray-400 hover:text-white" @click="toggleFullscreen">
          <component :is="isFullscreenEnabled ? PhArrowsInSimple : PhArrowsOutSimple" size="18" />
        </button>
      </div>
      <div class="items-center gap-3 flex lg:hidden">
        <button class="text-green-600">
          <PhHeart size="22" weight="fill" />
        </button>
        <button class="text-gray-400 hover:text-white">
          <PhDevices size="22" />
        </button>
        <button @click="isPlaying = !isPlaying" class="transition-transform hover:scale-110">
          <component :is="isPlaying ? PhPauseCircle : PhPlayCircle" weight="fill" size="40" />
        </button>
      </div>
    </div>

    <div class="h-1 w-full bg-gray-700 rounded group lg:hidden">
      <div
        class="w-[42%] h-full bg-white rounded group-hover:bg-green-500 relative after:rounded-full after:h-3 after:w-3 after:-top-1 after:-right-1 after:bg-white after:absolute after:invisible group-hover:after:visible">
      </div>
    </div>
    <div class="flex items-center justify-around py-1 lg:hidden w-full">
      <button class="text-white hover:text-white flex flex-col gap-1 items-center">
        <PhHouse size="28" />
        <span class="text-xs">Home</span>
      </button>
      <button class="text-gray-400 hover:text-white flex flex-col gap-1 items-center">
        <PhMagnifyingGlass size="28" />
        <span class="text-xs">Search</span>
      </button>
      <button class="text-gray-400 hover:text-white flex flex-col gap-1 items-center">
        <PhBooks size="28" />
        <span class="text-xs">Library</span>
      </button>
    </div>
  </footer>
</template>

<style></style>
