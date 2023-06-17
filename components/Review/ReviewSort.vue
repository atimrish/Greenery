<script setup>

const props = defineProps({
  modelValue: {
    type: String,
    default: 'p'
  }
});

const emits = defineEmits([
    'update:modelValue'
]);

</script>

<template>
  <select
      class="px-4 py-2"
      :value="modelValue"
      @change="emits('update:modelValue', $event.target.value)"
  >
    <option value="p">Сначала положительные</option>
    <option value="d">Сначала отрицательные</option>
  </select>
</template>

<style scoped>

</style>