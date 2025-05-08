<template>
    <div class="flex flex-col">
      <p class="text-gray text-sm">{{ label }}</p>
      <p class="font-bold text-xl">{{ value }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    label: String,
    value: [String, Number]
  })
  </script>
  