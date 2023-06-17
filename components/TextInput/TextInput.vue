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
  placeholder: {
    type: String,
    default: ''
  }
});

const emits = defineEmits(['update:modelValue']);

</script>

<template>
  <div class="my-6">
    <input
        type="text"
        @input="emits('update:modelValue', $event.target.value)"
        :value="modelValue"
        :id="id"
        class="block text-[20px] w-full h-full pl-3"
        :placeholder="placeholder"
    >
  </div>
</template>

<style scoped>

</style>