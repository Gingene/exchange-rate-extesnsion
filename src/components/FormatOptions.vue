<template>
  <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mt-4">
    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">格式設定</h3>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> 貨幣顯示方式 </label>
      <select
        v-model="settingsStore.currencyDisplay"
        class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option v-for="option in displayOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> 數字表示法 </label>
      <select
        v-model="settingsStore.notation"
        class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option v-for="option in notationOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> 地區設定 </label>
      <select
        v-model="settingsStore.locale"
        class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option value="zh-TW">繁體中文 (台灣)</option>
        <option value="zh-CN">簡體中文 (中國)</option>
        <option value="en-US">英文 (美國)</option>
        <option value="ja-JP">日文 (日本)</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settingsStore'

const settingsStore = useSettingsStore()
const { displayOptions, notationOptions } = settingsStore
</script>
