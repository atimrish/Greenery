<script setup>
import {usePageStore} from "~/store/page";
import {useCategoryStore} from "~/store/category";
import {useProductStore} from "~/store/product";
import SubmitButton from "~/components/Button/SubmitButton.vue";
import Characteristics from "~/components/Characteristics/Characteristics.vue";
import admin from "~/middleware/admin";
const pageStore = usePageStore();
pageStore.setPage('/admin')

definePageMeta({
  middleware: [admin]
})



const categoryStore = useCategoryStore();
const productStore = useProductStore();

const title = ref('');
const description = ref('');
const category = ref('');
const subcategories = ref([]);
const subcategory = ref('');

const handlerPushSubcategories = (value) => {
  subcategories.value = value;
}



const categoryLoaded = ref(false);
let categoryPhoto = ref('');



const handleChangeCategoryPhoto = ($event) => {
  const reader = new FileReader();
  categoryLoaded.value = true;
  reader.readAsDataURL($event.target.files[0]);

  reader.onload = (ev) => {
    categoryPhoto.value = ev.target.result;
  }
}



const characts = ref([]);
const handlerPushUp = (data) => {
  characts.value = data.value
}

const createProduct = async () => {
  await productStore.createProduct(
      title.value,
      description.value,
      category.value,
      subcategory.value,
      characts.value
  )
}


</script>

<template>
  <div class="xl:w-[1200px] mx-auto my-6 min-h-screen">
    <form
        class="flex justify-between flex-wrap"
        enctype="multipart/form-data"
        id="create_category_form"
        @submit.prevent="createProduct"
        name="create_category"
    >
      <div class="w-[300px] h-[300px] bg-gray relative">
        <div class="absolute create_category z-30">
          <img src="~/assets/img/create_category.svg" alt="" class="mx-auto">
          <div class="text-center mt-2">Выбрать фото</div>
        </div>
        <input
            type="file"
            id="create_category"
            class="hidden"
            @change="handleChangeCategoryPhoto"
            multiple
        >
        <label for="create_category" class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 z-50"></label>
        <img v-if="categoryLoaded" :src="categoryPhoto" alt=""
             class="absolute top-0 left-0 bg-gray w-full h-full z-20 object-center object-cover">
      </div>

      <div class="w-[400px]">
        <h3 class="">Название товара</h3>
        <TextInput v-model="title" id="product_title" class="border"/>
        <h3 class="mb-6">Описание товара</h3>
        <Textarea v-model="description" class="border"/>
      </div>

      <div class="w-[400px]">
        <h3 class="mb-6">Категория</h3>
        <SelectCategory
            v-model="category"
            @pushSubcategories="handlerPushSubcategories"
        />

        <h3 class="my-6">Подкатегория</h3>
        <SelectSubCategory v-model="subcategory" :subs="subcategories" />

        <SubmitButton text="Создать" class="py-2 px-1 block w-full bg-yellow my-6 text-white text-center" />
      </div>

      <div>
        <h3 class="mb-4">Характеристики</h3>
        <Characteristics @push-up="handlerPushUp" />
      </div>

    </form>
  </div>
</template>

<style scoped>
.create_category {
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
</style>