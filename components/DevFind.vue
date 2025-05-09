<template>
    <div class="space-y-4">
        <div class="max-w-full sm:max-w-xl md:max-w-lg lg:max-w-3xl xl:max-w-4xl mx-auto my-10">
            <div class="flex flex-wrap items-center gap-5 mb-2">
                <b class="text-lg">DevFinder</b>

                <NuxtLink to="/history">
                    Histórico
                </NuxtLink>

                <NuxtLink :to="isLoggedIn ? '/account' : '/login'">
                    Conta
                </NuxtLink>

                <div class="ml-auto">
                    <ThemeToggleButton />
                </div>
            </div>

            <div class="flex items-center space-x-2 bg-lightgray dark:bg-bluegray pl-5 pr-2 py-2 rounded-xl">
                <div class="flex-1">
                    <AppInput v-model="username" placeholder="Search GitHub username..." @enter="findUser" />
                </div>
                <AppButton label="Search" :action="findUser" />
            </div>

            <div v-if="errorMessage" class="text-red-500 mt-10">
                {{ errorMessage }}
            </div>

            <div v-if="user" class="mt-6">
                <UserCard :user="user" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { fetchGitHubUser, type GitHubUser } from '~~/services/githubService'

const username = ref('')
const user = ref<GitHubUser | null>(null)
const errorMessage = ref('')
const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('user');

export interface IHistoricoDePesquisas {
    urlImgPerfil: string
    nome: string
    usuario: string
    dataConsulta: string
    linksSociais: string[]
}

function saveToHistory(user: GitHubUser) {
    const history: IHistoricoDePesquisas[] = JSON.parse(localStorage.getItem('historico') || '[]')

    const novoRegistro: IHistoricoDePesquisas = {
        urlImgPerfil: user.avatar_url,
        nome: user.name || user.login,
        usuario: user.login,
        dataConsulta: new Date().toISOString(),
        linksSociais: [
            user.html_url,
            ...(user.blog ? [user.blog] : []),
            ...(user.twitter_username ? [`https://x.com/${user.twitter_username}`] : []),
        ]
    }

    history.unshift(novoRegistro)
    localStorage.setItem('historico', JSON.stringify(history))
}

async function findUser() {
    errorMessage.value = ''
    user.value = null

    try {
        const result = await fetchGitHubUser(username.value)
        if (result) {
            user.value = result
            saveToHistory(result)
        } else {
            throw new Error('Usuário não encontrado.')
        }
    } catch (error) {
        errorMessage.value = 'Usuário não encontrado. Verifique o nome e tente novamente.'
    }
}

</script>