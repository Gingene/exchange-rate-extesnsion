import { ref, onMounted, watch } from 'vue'

export function useTheme() {
  const themes = {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system',
  }

  const currentTheme = ref(themes.SYSTEM)
  const isDark = ref(false)

  const detectSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const applyTheme = () => {
    if (currentTheme.value === themes.SYSTEM) {
      isDark.value = detectSystemTheme()
    } else {
      isDark.value = currentTheme.value === themes.DARK
    }

    document.documentElement.classList.toggle('dark', isDark.value)
  }

  const setTheme = (theme) => {
    currentTheme.value = theme
    applyTheme()
  }

  onMounted(() => {
    // 監聽系統主題變化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (currentTheme.value === themes.SYSTEM) {
        applyTheme()
      }
    })

    applyTheme()
  })

  watch(currentTheme, applyTheme)

  return {
    currentTheme,
    isDark,
    themes,
    setTheme,
  }
}
