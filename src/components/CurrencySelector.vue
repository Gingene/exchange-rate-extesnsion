<template>
  <div class="currency-selector">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
    >
      <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
        {{ currency.code.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  currencies: {
    type: Array,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>
