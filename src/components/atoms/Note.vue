<template>
    <div class="mt-8 mx-auto prose">
        {{ note }}
        <hr class="mt-8 border-t-2 border-indigo-600 w-40 mx-auto" />
    </div>
</template>

<script setup>
const props = defineProps({
    note: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: 'Default Title'
    }
})
</script>
