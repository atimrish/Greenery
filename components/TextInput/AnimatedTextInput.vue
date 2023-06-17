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
  type: {
    type: String,
    default: 'text'
  }
});

const emits  =defineEmits([
    'update:modelValue'
]);

</script>

<template>
  <input
      @input.passive="emits('update:modelValue', $event.target.value)"
      :value="modelValue"
      :type="type"
      :name="id"
      :id="id"
      class="block w-full py-2 pl-2 my-8 border border-gray"
  >
</template>

<style scoped>

</style>