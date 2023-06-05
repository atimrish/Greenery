<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <button type="submit">{{text}}</button>
</template>

<style scoped>

</style>