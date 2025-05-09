<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div class="p-8 bg-lightgray dark:bg-bluegray rounded">
            <h1 class="text-3xl font-bold mb-6 text-center text-ligthtxt dark:text-darktxt">Login</h1>
            <button @click="loginWithGoogle"
                class="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition">
                <svg class="w-6 h-6" viewBox="0 0 48 48">
                    <path fill="#EA4335"
                        d="M24 9.5c3.54 0 6.73 1.22 9.23 3.22l6.9-6.9C35.5 3.24 30.15 1 24 1 14.46 1 6.26 5.51 2.27 12.16l7.9 6.15C12.19 12.53 17.35 9.5 24 9.5z" />
                    <path fill="#4285F4"
                        d="M46.1 24.5c0-1.7-.15-3.34-.44-4.92H24v9.3h12.66c-.55 3-2.31 5.57-4.93 7.26l7.77 6.05C44.69 37.3 46.1 31.35 46.1 24.5z" />
                    <path fill="#FBBC05"
                        d="M9.17 28.09a14.48 14.48 0 0 1 0-8.16v-6.15H2.27a23.3 23.3 0 0 0 0 20.46l6.9-6.15z" />
                    <path fill="#34A853"
                        d="M24 47c6.15 0 11.32-2.04 15.09-5.55l-7.77-6.05c-2.16 1.46-4.93 2.32-7.32 2.32-5.63 0-10.41-3.81-12.12-8.93H2.27v6.16A23.3 23.3 0 0 0 24 47z" />
                    <path fill="none" d="M0 0h48v48H0z" />
                </svg>
                Login com Google
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

function loginWithGoogle() {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            console.log('Usuário logado:', user)
            router.push('/')
        })
        .catch((error) => {
            console.error('Erro durante o login:', error)
        })
}
</script>

<style scoped>

body {
    margin: 0;
}
</style>