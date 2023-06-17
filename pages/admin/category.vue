<script setup>
import {usePageStore} from "~/store/page";
import {useCategoryStore} from "~/store/category";
import SubmitButton from "~/components/Button/SubmitButton.vue";
import admin from "~/middleware/admin";

const pageStore = usePageStore();
pageStore.setPage('/admin');


definePageMeta({
  middleware: [admin]
})



const categoryStore = useCategoryStore();

const categoryLoaded = ref(false);
let categoryPhoto = ref('');

const categoryName = ref('');


const handleChangeCategoryPhoto = ($event) => {
  const reader = new FileReader();
  categoryLoaded.value = true;
  reader.readAsDataURL($event.target.files[0]);

  reader.onload = (ev) => {

    categoryPhoto.value = ev.target.result;
  }
}

const handleCreateCategory = async () => {
  await categoryStore.createCategory(categoryName.value);
}


const subcategoryTitle = ref('');
const subcategoryLoaded = ref(false);
let subcategoryPhoto = ref('');
const category_id = ref('');

const handleChangeSubcategoryPhoto = ($event) => {
  const reader = new FileReader();
  subcategoryLoaded.value = true;
  reader.readAsDataURL($event.target.files[0]);
  reader.onload = (ev) => {

    subcategoryPhoto.value = ev.target.result;
  }
}

const handleCreateSubCategory = async () => {
  await categoryStore.createSubcategory(subcategoryTitle.value, category_id.value);
}

</script>

<template>
  <div class="xl:w-[1200px] mx-auto my-6">
    <h2 class="text-[36px] mb-8">Создание категории</h2>

    <form
        class="flex justify-between"
        enctype="multipart/form-data"
        id="create_category_form"
        @submit.prevent="handleCreateCategory"
        name="create_category"
    >
      <div class="w-[600px] h-[300px] bg-gray relative">
        <div class="absolute create_category z-30">
          <img src="~/assets/img/create_category.svg" alt="" class="mx-auto">
          <div class="text-center mt-2">Выбрать фото</div>
        </div>
        <input
            type="file"
            id="create_category"
            class="hidden"
            @change="handleChangeCategoryPhoto"
        >
        <label for="create_category" class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 z-50"></label>
        <img v-if="categoryLoaded" :src="categoryPhoto" alt=""
             class="absolute top-0 left-0 bg-gray w-full h-full z-20 object-center object-cover">
      </div>

      <div>
        <h2 class="text-[24px]">Категория</h2>
        <TextInput
            v-model="categoryName"
            class="border mb-16"
            id="title_category"
        />
        <SubmitButton class="py-2 px-1 bg-yellow text-white text-center" text="Добавить категорию" />
      </div>
    </form>


    <div>
      <h2 class="text-[36px] my-8">Создание подкатегории</h2>

      <form class="flex justify-between" @submit.prevent="handleCreateSubCategory">

        <div>
          <div class="w-[600px] h-[300px] bg-gray relative">
            <div class="absolute create_category z-30">
              <img src="~/assets/img/create_category.svg" alt="" class="mx-auto">
              <div class="text-center mt-2">Выбрать фото</div>
            </div>
            <input
                type="file"
                id="create_subcategory"
                class="hidden"
                @change="handleChangeSubcategoryPhoto"
            >
            <label for="create_subcategory" class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 z-50"></label>
            <img v-if="subcategoryLoaded" :src="subcategoryPhoto" alt=""
                 class="absolute top-0 left-0 bg-gray w-full h-full z-20 object-center object-cover">
          </div>
        </div>


        <div>

          <h3 class="my-4">Категория</h3>
          <Select class="w-full" v-model="category_id"/>
          <h3 class="my-4">Подкатегория</h3>
          <TextInput
              class="border"
              v-model="subcategoryTitle"
              id="create_subcategory_title"
          />

          <SubmitButton class="py-2 px-1 bg-yellow text-white text-center" text="Добавить подкатегорию" />

        </div>

      </form>
    </div>


  </div>
</template>

<style scoped>
.create_category {
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
</style>