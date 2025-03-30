<template>
  <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mt-4">
    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">主題設定</h3>

    <div class="flex space-x-2">
      <button
        @click="setTheme(themes.LIGHT)"
        class="flex-1 py-2 px-4 rounded"
        :class="[
          currentTheme === themes.LIGHT
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white',
        ]"
      >
        淺色
      </button>

      <button
        @click="setTheme(themes.DARK)"
        class="flex-1 py-2 px-4 rounded"
        :class="[
          currentTheme === themes.DARK
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white',
        ]"
      >
        深色
      </button>

      <button
        @click="setTheme(themes.SYSTEM)"
        class="flex-1 py-2 px-4 rounded"
        :class="[
          currentTheme === themes.SYSTEM
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white',
        ]"
      >
        系統
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'
import { useSettingsStore } from '@/stores/settingsStore'
import { watch } from 'vue'

const { currentTheme, themes, setTheme } = useTheme()
const settingsStore = useSettingsStore()

// 同步主題到 store
watch(currentTheme, (newTheme) => {
  settingsStore.updateTheme(newTheme)
})

// 初始化時從 store 讀取主題
setTheme(settingsStore.theme)
</script>
