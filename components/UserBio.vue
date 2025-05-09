<template>
    <div class="flex flex-col">
        <p :class="!user.bio ? 'text-gray' : ''">
            {{ user.bio ?? 'This profile has no bio' }}
        </p>
        <div class="flex flex-row justify-between bg-lightbg dark:bg-darkbg px-6 py-3 rounded-xl w-full mt-4">
            <UserStat label="Repos" :value="user.public_repos" />
            <UserStat label="Followers" :value="user.followers" />
            <UserStat label="Following" :value="user.following" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { GitHubUser } from '../services/githubService'

defineProps<{
    user: GitHubUser
}>()
</script>