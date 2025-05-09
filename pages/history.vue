<template>
    <div class="max-w-3xl mx-auto space-y-6">
        <div class="flex items-center gap-2 mb-4">
            <button @click="$router.back()" class="flex items-center">
                <Icon name="uil:arrow-left" class="h-6 w-6" />
            </button>
            <h1 class="text-2xl font-bold">Histórico de Pesquisas</h1>
        </div>

        <div v-if="historico.length === 0" class="text-gray-500">
            Nenhuma pesquisa encontrada.
        </div>

        <div v-else class="space-y-4">
            <div v-for="(item, index) in historico" :key="index"
                class="flex items-center gap-4 p-4 rounded-lg bg-lightgray dark:bg-bluegray">
                <img :src="item.urlImgPerfil" alt="Avatar" class="w-16 h-16 rounded-full" />
                <div class="flex-1">
                    <p class="font-semibold">{{ item.nome }} <span class="text-sm text-gray-500">(@{{ item.usuario
                    }})</span></p>
                    <p class="text-xs text-gray-400">Consultado em: {{ formatDate(item.dataConsulta) }}</p>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <a v-for="(link, index) in item.linksSociais" :key="index" :href="link" target="_blank"
                            class="flex items-center text-primary text-sm hover:underline">
                            <Icon name="uil:link" class="h-5 w-5 mr-2" />
                            {{ link }}
                        </a>
                        <p v-if="item.linksSociais.length === 1" class="text-sm text-gray-400">- Sem link social</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface IHistoricoDePesquisas {
    urlImgPerfil: string
    nome: string
    usuario: string
    dataConsulta: string
    linksSociais: string[]
}

const historico = ref<IHistoricoDePesquisas[]>([])

onMounted(() => {
    const data = localStorage.getItem('historico')
    if (data) {
        historico.value = JSON.parse(data)
        console.log(historico.value)
    }
})

function formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}
</script>