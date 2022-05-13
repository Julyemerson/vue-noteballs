<template>
    <RouterLink class="block w-full py-3 transition hover:text-cyan-600" :to="{ name: linkTo }">
        {{ name }}
    </RouterLink>
</template>

<script setup>
const props = defineProps({
    linkTo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>
