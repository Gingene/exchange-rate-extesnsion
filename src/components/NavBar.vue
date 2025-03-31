<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md p-4 mb-4 rounded-lg flex justify-between items-center">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">匯率換算工具</h1>
    <div class="relative">
      <div class="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full" @click="toggleThemeOptions">
        <!-- 淺色模式圖標 -->
        <svg
          v-if="currentTheme === themes.LIGHT"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-800 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <!-- 深色模式圖標 -->
        <svg
          v-else-if="currentTheme === themes.DARK"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-800 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <!-- 系統模式圖標 -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-800 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>

      <!-- 主題選項下拉選單 -->
      <div
        v-if="showThemeOptions"
        class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-10"
      >
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">主題設定</h3>
        <div class="space-y-2">
          <button
            @click="(setTheme(themes.LIGHT), (showThemeOptions = false))"
            class="w-full py-2 px-4 rounded text-left flex items-center"
            :class="[
              currentTheme === themes.LIGHT
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600',
            ]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            淺色
          </button>

          <button
            @click="(setTheme(themes.DARK), (showThemeOptions = false))"
            class="w-full py-2 px-4 rounded text-left flex items-center"
            :class="[
              currentTheme === themes.DARK
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600',
            ]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            深色
          </button>

          <button
            @click="(setTheme(themes.SYSTEM), (showThemeOptions = false))"
            class="w-full py-2 px-4 rounded text-left flex items-center"
            :class="[
              currentTheme === themes.SYSTEM
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600',
            ]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            系統
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useSettingsStore } from '@/stores/settingsStore'
import { watch } from 'vue'

const showThemeOptions = ref(false)
const { currentTheme, themes, setTheme } = useTheme()
const settingsStore = useSettingsStore()

// 切換主題選項顯示狀態
const toggleThemeOptions = () => {
  showThemeOptions.value = !showThemeOptions.value
}

// 同步主題到 store
watch(currentTheme, (newTheme) => {
  settingsStore.updateTheme(newTheme)
})

// 初始化時從 store 讀取主題
setTheme(settingsStore.theme)
</script>
