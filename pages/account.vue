<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div class="p-8 bg-lightgray dark:bg-bluegray rounded w-full max-w-md">
            <button @click="router.replace('/')" class="mb-4 text-blue-600 hover:underline flex items-center gap-1">
                <Icon name="uil:arrow-left" class="h-6 w-6" />
                Voltar
            </button>

            <h1 class="text-3xl font-bold mb-6 text-center text-ligthtxt dark:text-darktxt">Perfil do Usuário</h1>

            <div class="flex justify-center mb-4">
                <img v-if="user.photoURL" :src="user.photoURL" alt="Foto de Perfil"
                    class="w-32 h-32 rounded-full object-cover border-2 border-gray-300" />
                <div v-else
                    class="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-xl text-white">
                    {{ user.displayName?.charAt(0) }}
                </div>
            </div>

            <div class="text-center mb-4">
                <p class="text-lg font-semibold text-ligthtxt dark:text-darktxt">Nome: {{ user.displayName }}</p>
                <p class="text-lg text-ligthtxt dark:text-darktxt">E-mail: {{ user.email }}</p>
            </div>

            <button @click="logout" class="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition">
                Sair
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useState } from '#app'

const router = useRouter()

const user = useState('user', () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
})

function logout() {
    localStorage.removeItem('user')
    router.push('/login')
}
</script>

<style scoped>
body {
    margin: 0;
}
</style>
