<script setup>

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  subs: {
    type: Array,
    default: []
  }
});


const emits = defineEmits(['update:modelValue']);




</script>

<template>
  <div class="w-[300px] h-[50px]">
    <select
        class="w-full h-full pl-3"
        :value="modelValue"
        @change="emits('update:modelValue', $event.target.value)"
    >
      <option value="" selected>Нет подкатегории</option>
      <option v-for="opt in subs" :value="opt.title">{{opt.title}}</option>
    </select>
  </div>
</template>

<style scoped>

</style>