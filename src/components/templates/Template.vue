<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
        <Header />
        <div class="flex flex-col justify-center items-center space-y-10">
            <Note />
            <Note />
            <Note />
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/organisms/Header.vue'
import Note from '@/components/atoms/Note.vue'
</script>

<style  scoped>
</style>