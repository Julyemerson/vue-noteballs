<template>
    <div class="w-full px-6 bg-white lg:block lg:w-auto lg:px-0 lg:bg-transparent"
        :class="{ 'hidden': !storeNotes.isMenuOpen }">
        <ul class="py-4 text-gray-600 text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0">
            <li>
                <LinkTo linkTo="notes" name="Notas" />
            </li>
            <li>
                <LinkTo linkTo="stats" name="Estatísticas" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import LinkTo from "@/components/atoms/LinkTo.vue"
import { useStoreNotes } from "@/stores/storeNotes"

const storeNotes = useStoreNotes()





</script>
