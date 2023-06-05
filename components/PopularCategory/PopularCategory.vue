<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="popular-category xl:w-[250px] bg-white p-6 relative mb-24 transition-all">
    <div class="text-black xl:text-[24px]">{{title}}</div>
    <div class="my-4">
      <slot class="mx-auto object-center"></slot>
    </div>
    <div class="xl:w-[150px] text-center px-3 py-2 text-black bg-gray absolute -bottom-6 left-[50px]">Подробнее</div>
  </div>
</template>

<style scoped>
.popular-category:hover {
  background-color: #627A50;
}
.popular-category:hover > * {
  color: #E8ECE8;
}

.popular-category:hover > :last-child {
  background-color: #A88C1B;
}

:slotted(*) {
  fill: #2C302D;
}

:slotted(*:hover) {
  fill: #E8ECE8!important;
}
</style>