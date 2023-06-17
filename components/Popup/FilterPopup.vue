<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div v-if="isOpen" class="absolute top-full right-0 w-[370px] h-[600px] shadow-2xl z-20 bg-[#fff] py-4 px-16">
    <DoubleRange
      :min="0"
      :max="100"
    />
  </div>
</template>

<style scoped>

</style>