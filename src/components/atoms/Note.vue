<template>
    <div class="w-full p-4">
        <h2 class="text-3xl text-indigo-600 font-extrabold my-2 text-center">{{ title }}</h2>
        <p class="font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sequi quae
            dolore
            numquam voluptas velit.
            Facere, quo? Minima itaque velit dolorem ex aut rem harum voluptatibus tempore ullam, ab nobis?
        </p>
        <hr class="mt-8 border-t-2 border-indigo-600 w-20 mx-auto" />
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'One more ideia'
    },

})
</script>

<style scoped>
</style>