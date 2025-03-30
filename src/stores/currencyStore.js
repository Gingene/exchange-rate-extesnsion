import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// api results foramt example [ { "code": "1inch", "rate": 5.01213869 }, { "code": "aave", "rate": 0.0059417375 }, { "code": "ada", "rate": 1.34422496 }, { "code": "aed", "rate": 3.6725 }]

export const useCurrencyStore = defineStore('currency', () => {
  const fromCurrency = ref('usd')
  const toCurrency = ref('twd')
  const amount = ref(1)
  const rates = ref({})
  const currencies = ref({})
  const error = ref(null)

  const setRates = (newRates) => {
    rates.value = newRates
  }

  const swapCurrencies = () => {
    ;[fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value]
  }

  const fetchCurrencyRates = async (baseCurrency = 'usd') => {
    error.value = null
    try {
      console.log('123')
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`,
      )
      const data = await response.json()
      currencies.value = data[baseCurrency]
      return data[baseCurrency]
    } catch (err) {
      error.value = '獲取匯率數據失敗'
      console.error(err)
    }
  }
  const updateRates = async () => {
    try {
      const rates = await fetchCurrencyRates(fromCurrency.value)
      if (rates) {
        setRates(rates)
      }
    } catch (err) {
      error.value = '獲取匯率數據失敗'
      console.error(err)
    }
  }

  const convertedAmount = computed(() => {
    if (!rates.value[toCurrency.value]) return 0
    return amount.value * rates.value[toCurrency.value]
  })

  const availableCurrencies = computed(() => {
    return Object.keys(currencies.value).map((code) => ({
      code,
      rate: currencies.value[code],
    }))
  })

  return {
    fromCurrency,
    toCurrency,
    amount,
    rates,
    error,
    setRates,
    swapCurrencies,
    fetchCurrencyRates,
    updateRates,
    availableCurrencies,
    convertedAmount,
  }
})
