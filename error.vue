<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 class="text-5xl font-bold mb-4">Erro {{ error.statusCode }}</h1>
        <p class="text-lg">{{ error.message }}</p>
        <NuxtLink to="/" class="mt-6 text-blue-500 underline">Voltar à página inicial</NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    error: {
        type: Object,
        required: true
    }
})
</script>
