<script setup>
const props = defineProps({
  num: {
    type: Number,
    default: 0
  }
});
</script>

<template>
  <div>
    {{num}}
  </div>
</template>

<style scoped>

</style>