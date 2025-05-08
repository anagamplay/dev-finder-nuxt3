<template>
    <button @click="handleClick" class="bg-primary text-darktxt px-6 py-3 rounded-xl">
        <span v-if="!loading">{{ label }}</span>
        <svg v-else class="animate-spin h-5 w-5 text-darktxt" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
    </button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    label: {
        type: String,
        default: 'Search'
    },
    action: {
        type: Function,
        required: true
    }
})

const loading = ref(false)

const handleClick = async () => {
    if (loading.value) return

    loading.value = true
    try {
        await props.action()
    } finally {
        loading.value = false
    }
}
</script>