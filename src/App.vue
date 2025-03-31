<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
    <NavBar />

    <div v-if="fisrtLoading" class="text-center py-4">
      <p class="text-gray-600 dark:text-gray-400">載入匯率資料中...</p>
    </div>

    <div v-else-if="currencyStore.error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      {{ currencyStore.error }}
    </div>

    <template v-else>
      <CurrencyConverter />
      <FormatOptions />
    </template>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import CurrencyConverter from '@/components/CurrencyConverter.vue'
import FormatOptions from '@/components/FormatOptions.vue'
import NavBar from '@/components/NavBar.vue'
import { useCurrencyStore } from '@/stores/currencyStore'

const fisrtLoading = ref(true)

const currencyStore = useCurrencyStore()

watchEffect(async () => {
  currencyStore.fromCurrency
  await currencyStore.updateRates()
  fisrtLoading.value = false
})
</script>
