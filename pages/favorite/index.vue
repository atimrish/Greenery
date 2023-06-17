<script setup>
import FavoriteContainer from "~/components/Containers/FavoriteContainer.vue";

useHead({
  title: 'Избранные'
})

</script>

<template>
  <div class="xl:w-[1200px] m-auto">
    <h2 class="text-[24px] mb-24">Избранное</h2>
    <FavoriteContainer/>
  </div>
</template>

<style scoped>

</style>