<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emits = defineEmits(['update:modelValue']);

</script>

<template>
  <textarea
      cols="30"
      rows="10"
      :value="modelValue"
      @input="emits('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<style scoped>

</style>