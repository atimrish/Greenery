<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  },
  label: {
    type:String,
    default: ''
  }
});
</script>

<template>
  <div class="my-6">
    <label
        :for="id"
        class="text-[24px] mb-10"
    >{{label}}</label>
    <input
        type="text"
        @input.passive="$emit('update:modelValue')"
        :value="modelValue"
        :id="id"
        class="block h-[35px] text-[20px] w-full text-input pl-3"
    >
  </div>
</template>

<style scoped>
.text-input {
  background-color: #DBDBDB;
}
</style>