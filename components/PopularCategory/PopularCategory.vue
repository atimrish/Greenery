<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="xl:w-[300px] bg-gray p-2">
    <div class="text-black xl:text-[24px]">{{title}}</div>
    <div>
      <slot></slot>
    </div>
    <div class="xl:w-[120px] text-center px-3 py-2 text-black bg-gray hover:bg-yellow hover:text-white">Подробнее</div>
  </div>
</template>

<style scoped>

</style>