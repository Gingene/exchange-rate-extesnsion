<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">匯率換算工具</h1>

    <div v-if="fisrtLoading" class="text-center py-4">
      <p class="text-gray-600 dark:text-gray-400">載入匯率資料中...</p>
    </div>

    <div v-else-if="currencyStore.error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      {{ currencyStore.error }}
    </div>

    <template v-else>
      <CurrencyConverter />
      <FormatOptions />
      <ThemeToggler />
    </template>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import CurrencyConverter from '@/components/CurrencyConverter.vue'
import FormatOptions from '@/components/FormatOptions.vue'
import ThemeToggler from '@/components/ThemeToggler.vue'
import { useCurrencyStore } from '@/stores/currencyStore'

const fisrtLoading = ref(true)

const currencyStore = useCurrencyStore()

watchEffect(async () => {
  currencyStore.fromCurrency
  await currencyStore.updateRates()
  fisrtLoading.value = false
})
</script>
