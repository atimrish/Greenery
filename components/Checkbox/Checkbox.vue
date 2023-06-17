<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div>
    <input type="checkbox" :id="id" class="hidden">
    <label :for="id" class="block w-[20px] h-[20px] bg-gray rounded py-[2px]">
      <img src="~/assets/img/checked.svg" alt="" class="w-[16px] h-[16px] mx-auto object-center object-cover hidden">
    </label>
  </div>
</template>

<style scoped>
input[type="checkbox"]:checked ~ label {
  background-color: #627A50;
}
input[type="checkbox"]:checked ~ label > img {
  display: block;
}
</style>