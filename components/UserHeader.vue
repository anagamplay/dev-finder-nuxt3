<template>
    <div class="flex" :class="layout === 'mobile' ? 'flex-row items-center' : 'justify-between items-start'">
        <div v-if="layout === 'mobile'">
            <div class="flex flex-col mr-5">
                <img :src="user.avatar_url" :alt="user.login" class="w-20 aspect-square rounded-full object-cover" />
            </div>
        </div>
        <div class="flex-1 flex-col justify-between">
            <div>
                <div class="flex flex-row justify-between items-center">
                    <p class="text-2xl font-bold">{{ user.name }}</p>
                    <p class="text-sm" v-if="layout === 'desktop'">Joined {{ formatDate(user.created_at) }}</p>
                </div>
                <a :href="'https://github.com/' + user.login" class="text-primary mt-1 block" target="_blank">
                    @{{ user.login }}
                </a>
            </div>
            <p class="text-sm mt-2" v-if="layout === 'mobile'">Joined {{ formatDate(user.created_at) }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { GitHubUser } from '../services/githubService'

defineProps<{
    user: GitHubUser
    layout: 'mobile' | 'desktop'
}>()

function formatDate(isoString: string): string {
    const date = new Date(isoString)
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' }
    return new Intl.DateTimeFormat('en-GB', options).format(date)
}
</script>