<template>
  <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> 從 </label>
      <div class="flex items-center">
        <CurrencySelector
          v-model="currencyStore.fromCurrency"
          :currencies="currencyStore.availableCurrencies"
          class="w-1/3"
        />
        <input
          v-model.number="currencyStore.amount"
          type="number"
          min="0"
          class="ml-2 flex-1 p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
      </div>
    </div>

    <button
      @click="currencyStore.swapCurrencies"
      class="w-full py-2 mb-4 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center justify-center"
    >
      <span>交換貨幣</span>
    </button>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> 到 </label>
      <div class="flex items-center">
        <CurrencySelector
          v-model="currencyStore.toCurrency"
          :currencies="currencyStore.availableCurrencies"
          class="w-1/3"
        />
        <div class="ml-2 flex-1 p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600">
          {{ formattedResult }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCurrencyStore } from '@/stores/currencyStore'
import { useSettingsStore } from '@/stores/settingsStore'
import CurrencySelector from './CurrencySelector.vue'

const currencyStore = useCurrencyStore()
const settingsStore = useSettingsStore()

const formattedResult = computed(() => {
  return settingsStore.formatCurrency(currencyStore.convertedAmount, currencyStore.toCurrency, settingsStore.locale)
})
</script>
