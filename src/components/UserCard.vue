<template>
    <div class="bg-lightgray text-lighttxt dark:bg-bluegray dark:text-darktxt py-5 lg:p-10 rounded-2xl">
        <div class="block lg:hidden w-full max-w-md mx-auto space-y-6 px-4">
            <UserHeader :user="user" layout="mobile" />
            <UserBio :user="user" />
            <UserInfoList :user="user" />
        </div>

        <div class="hidden lg:block">
            <div class="flex flex-row justify-between">
                <div class="flex flex-col mr-10 ">
                    <img :src="user.avatar_url" :alt="user.login" class="w-40 rounded-full" />
                </div>
                <div class="flex-1 flex-col space-y-4">
                    <UserHeader :user="user" layout="desktop" />
                    <UserBio :user="user" />
                    <UserInfoList :user="user" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { GitHubUser } from '../services/githubService'

defineProps<{
    user: GitHubUser
}>()

function formatDate(isoString: string): string {
    const date = new Date(isoString)
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' }
    return new Intl.DateTimeFormat('en-GB', options).format(date)
}

</script>