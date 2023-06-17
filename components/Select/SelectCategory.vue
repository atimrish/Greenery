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


const emits = defineEmits(['update:modelValue', 'pushSubcategories']);

onMounted(async () => {
  await categoryStore.getCategories();
})

const handlerChange = ($event) => {
  emits('update:modelValue', $event.target.value);
  emits('pushSubcategories', categories.value.find(item => item.title === $event.target.value).child)
}



</script>

<template>
  <div class="w-[300px] h-[50px]">
    <select
        class="w-full h-full pl-3"
        :value="modelValue"
        @change="handlerChange"
    >
      <option value="" selected>Выберите родительскую категорию</option>
      <option v-for="opt in categories" :value="opt.title">{{opt.title}}</option>
    </select>
  </div>
</template>

<style scoped>

</style>