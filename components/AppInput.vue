<template>
    <div class="relative flex-1">
        <div class="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary w-6 h-6">
            <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"
                fill="currentColor">
                <path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208M208 352a144 144 0 1 0 0-288a144 144 0 1 0 0 288" />
            </svg>
        </div>
        <input
            v-model="inputValue"
            @keyup.enter="onEnter"
            :placeholder="placeholder"
            class="pl-12 pr-2 py-2 rounded w-full bg-lightgray placeholder-lighttxt dark:bg-bluegray dark:placeholder-darktxt focus:outline-none focus:ring-0 text-lg"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps<{
    modelValue: string
    placeholder?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'enter'): void
}>()

const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
})

const onEnter = () => {
    emit('enter')
}
</script>
