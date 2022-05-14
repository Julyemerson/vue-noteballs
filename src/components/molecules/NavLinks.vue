<template>
    <TransitionRoot as="template" :show="storeNotes.isMenuOpen" enter="transition transform duration-500 ease-out"
        enterFrom="-translate-y-8 opacity-0" enterTo="translate-y-0 opacity-100"
        leave="transition transform duration-500 ease-in" leaveFrom="translate-y-8 opacity-100" leaveTo="opacity-0">
        <div class="w-full px-6 bg-white lg:block lg:w-auto lg:px-0 lg:bg-transparent">
            <ul class="py-4 text-gray-600 text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0">
                <li>
                    <LinkTo linkTo="notes" name="Notas" />
                </li>
                <li>
                    <LinkTo linkTo="stats" name="Estatísticas" />
                </li>
            </ul>
        </div>
    </TransitionRoot>
</template>

<script setup>
import LinkTo from "@/components/atoms/LinkTo.vue"
import { TransitionRoot } from "@headlessui/vue"
import { useStoreNotes } from "@/stores/storeNotes"

const storeNotes = useStoreNotes()

</script>
