<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'В корзину'
  }
});
</script>

<template>
  <div>{{text}}</div>
</template>

<style scoped>

</style>