<template>
    <div class="flex flex-row items-center space-x-4">
        <Icon :name="icon" class="h-6 w-6" :class="textClass" />
        <p v-if="link" :class="textClass">
            <a :href="link" target="_blank">
                {{ content }}
            </a>
        </p>
        <p v-else :class="textClass">{{ content }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    icon: String,
    content: String,
    available: Boolean,
    link: {
        type: String,
        required: false,
    },
})

const textClass = computed(() => props.available ? '' : 'text-gray')
</script>