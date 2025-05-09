<template>
    <div class="flex flex-col gap-4 lg:flex-row lg:justify-between pt-4">
        <div class="flex flex-col space-y-2">
            <UserInfoItem icon="uil:map-marker" :content="user.location || 'Not Available'"
                :available="!!user.location" />
            <UserInfoItem icon="uil:link" :content="user.blog || 'No social link'" :available="!!user.blog"
                :link="user.blog ?? ''" />
        </div>
        <div class="flex flex-col space-y-2">
            <UserInfoItem icon="uil:twitter" :content="user.twitter_username || 'No social link'"
                :available="!!user.twitter_username" :link="user.twitter_username ? 'x.com/' + user.twitter_username : ''" />
            <UserInfoItem icon="uil:building" :content="user.company || 'Not Available'" :available="!!user.company" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { GitHubUser } from '../services/githubService'

defineProps<{
    user: GitHubUser
}>()
</script>