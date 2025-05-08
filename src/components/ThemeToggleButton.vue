<template>
    <button
      @click="toggleTheme"
      class="flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-300 ease-in-out"
    >
      {{ themeLabel }}
      <Icon
        :name="iconName"
        class="h-5 w-5 transition-transform duration-500 ease-in-out transform"
        :class="iconRotation"
      />
    </button>
  </template>
  
  <script setup lang="ts">
  const colorMode = useColorMode()
  
  const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }
  
  const themeLabel = computed(() =>
    colorMode.preference === 'dark' ? 'LIGHT' : 'DARK'
  )
  
  const iconName = computed(() =>
    colorMode.preference === 'dark'
      ? 'mdi:white-balance-sunny'
      : 'mdi:moon-waning-crescent'
  )
  
  const iconRotation = computed(() =>
    colorMode.preference === 'dark' ? 'rotate-0' : 'rotate-180'
  )
  </script>
  