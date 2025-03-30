import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const currencyDisplay = ref('symbol')
  const notation = ref('standard')
  const locale = ref('zh-TW')
  const theme = ref('system')

  const displayOptions = [
    { value: 'symbol', label: '符號 (€)' },
    { value: 'code', label: '代碼 (EUR)' },
    { value: 'narrowSymbol', label: '窄符號 ($)' },
    { value: 'name', label: '名稱 (歐元)' },
  ]

  const notationOptions = [
    { value: 'standard', label: '標準' },
    { value: 'compact', label: '緊湊格式' },
  ]

  const formatCurrency = (amount, currency, locale = 'zh-TW') => {
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        currencyDisplay: currencyDisplay.value,
        notation: notation.value,
      }).format(amount)
    } catch (err) {
      return 'sorry, there was an error formatting the currency'
    }
  }

  const updateLocale = (newLocale) => {
    locale.value = newLocale
  }

  const updateTheme = (newTheme) => {
    theme.value = newTheme
  }

  return {
    currencyDisplay,
    notation,
    locale,
    theme,
    displayOptions,
    notationOptions,
    formatCurrency,
    updateLocale,
    updateTheme,
  }
})
