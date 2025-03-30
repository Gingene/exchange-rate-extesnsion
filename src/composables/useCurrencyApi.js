import { ref, computed } from 'vue'

export function useCurrencyApi() {
  const currencies = ref({})
  const isLoading = ref(false)
  const error = ref(null)

  const fetchCurrencyRates = async (baseCurrency = 'usd') => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`,
      )
      const data = await response.json()
      currencies.value = data[baseCurrency]
      return data[baseCurrency]
    } catch (err) {
      error.value = '獲取匯率數據失敗'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  const availableCurrencies = computed(() => {
    return Object.keys(currencies.value).map((code) => ({
      code,
      rate: currencies.value[code],
    }))
  })

  return {
    currencies,
    isLoading,
    error,
    fetchCurrencyRates,
    availableCurrencies,
  }
}
