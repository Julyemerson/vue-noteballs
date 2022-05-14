<template>
    <button @click="handleMenuOpen" class="relative w-10 h-10 lg:hidden">
        <div id="line" class="inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-500"
            :class="{ 'rotate-45 absolute': storeNotes.isMenuOpen }">
        </div>
        <div id="line2" :class="closeMenu">
        </div>
    </button>
</template>
<script setup>
import { useStoreNotes } from '@/stores/storeNotes';
import { computed } from 'vue';

const storeNotes = useStoreNotes()

const handleMenuOpen = () => {
    storeNotes.handleOpenMenu()
}

const closeMenu = computed(() => {
    return storeNotes.isMenuOpen ?
        'inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300 -rotate-45 absolute'
        : 'inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-500'
})
</script>