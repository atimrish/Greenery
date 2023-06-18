<script setup>

const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <div class="w-[70px] h-[70px]">
    <img :src="'/photo/comment/' + path" alt="" class="w-full h-full object-cover object-center">
  </div>
</template>

<style scoped>

</style>