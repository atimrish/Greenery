<script setup>
import {useCategoryStore} from "~/store/category";
import {storeToRefs} from "pinia";
const categoryStore = useCategoryStore();

const {categories} = await storeToRefs(categoryStore)

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});


const emits = defineEmits(['update:modelValue']);

onMounted(async () => {
  await categoryStore.getCategories();
})



</script>

<template>
  <div class="w-[300px] h-[50px]">
    <select
        class="w-full h-full pl-3"
        :value="modelValue"
        @change="emits('update:modelValue', $event.target.value)"
    >
      <option value="0" selected>Выберите родительскую категорию</option>
      <option v-for="opt in categories" :value="opt._id">{{opt.title}}</option>
    </select>
  </div>
</template>

<style scoped>

</style>