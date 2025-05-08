<template>
  <div class="min-h-screen bg-lightbg text-lighttxt dark:bg-darkbg dark:text-darktxt p-4 space-y-4">
    <div class="max-w-full sm:max-w-4x1 md:max-w-lg lg:max-w-4xl xl:max-w-4x1 mx-auto md:my-20 lg:my-20 xl:my-20">
      <div class="flex justify-between mb-2">
        <b class="text-lg">DevFinder</b>
        <ThemeToggleButton />
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
import { ref, computed } from 'vue'
import { fetchGitHubUser, type GitHubUser } from '../services/githubService'
import UserCard from '../components/UserCard.vue'
import AppInput from '~/components/AppInput.vue'

const loading = ref(false)
const errorMessage = ref('')

const username = ref('')
const user = ref<GitHubUser | null>(null)

const colorMode = useColorMode()
const themeLabel = computed(() =>
  colorMode.preference === 'dark' ? 'LIGHT' : 'DARK'
)

function toggleTheme() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

async function findUser() {
  loading.value = true
  errorMessage.value = ''
  user.value = null
  try {
    user.value = await fetchGitHubUser(username.value)
  } catch (error) {
    errorMessage.value = 'Usuário não encontrado. Verifique o nome e tente novamente.'
    user.value = null
  } finally {
    loading.value = false
  }
}

</script>
