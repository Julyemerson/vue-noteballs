<template>
  <header class="relative w-full h-16 bg-white shadow-md transition lg:h-20">
    <nav class="container m-auto py-3 lg:px-20 lg:py-4">
      <div class="relative flex flex-wrap items-center justify-between">
        <HeaderItems />
        <NavLinks />
      </div>
    </nav>
  </header>
</template>

<script setup>
import HeaderItems from '@/components/molecules/HeaderItems.vue';
import NavLinks from '@/components/molecules/NavLinks.vue';


</script>
