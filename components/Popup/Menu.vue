<script setup>
import {useCategoryStore} from "~/store/category";
import {storeToRefs} from "pinia";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const categoryStore = await useCategoryStore();
await categoryStore.getCategories();
const {categories} = storeToRefs(categoryStore);

const childs = ref([]);
const photo = ref('');
const current_category = ref('');

const handleMouseEnter = (i) => {
  childs.value = i.child;
  photo.value = '/photo/category/' + i.photo;
  current_category.value = i.title;
}

const handleChildMouseEnter = (i) => {
  photo.value = '/photo/subcategory/' + i.photo;
  current_category.value = i.title;
}


</script>

<template>
  <teleport to="body">
    <transition name="menu">
      <div class="absolute xl:left-[90px] top-0 w-[1200px] h-[627px] bg-white z-20 flex transition-all shadow-2xl" v-if="isOpen">
        <div class="h-full w-[400px] bg-darkgreen pt-4 pl-4">
          <div v-for="i in categories" class="my-2">
            <NuxtLink
                class="text-white md:text-[20px]"
                :to="'/category/' + i.title"
                @mouseenter="handleMouseEnter(i)"
            >{{ i.title }}</NuxtLink>
          </div>
        </div>

        <div class="py-4 px-8 flex justify-between w-full">
          <div>
            <div
                v-for="i in childs"
                class="my-4"

            >
              <NuxtLink @mouseenter="handleChildMouseEnter(i)" :to="'/category/' + i.title"> {{i.title}}</NuxtLink>
            </div>
          </div>

          <div>
            <div class="md:w-[400px] md:h-[400px] my-8 bg-gray">
              <img :src="photo" alt="" class="w-full h-full object-center object-cover" v-if="photo">
            </div>
            <div class="md:text-[20px] text-center">{{ current_category }}</div>
          </div>

        </div>



      </div>
    </transition>
  </teleport>
</template>

<style scoped>

.menu-enter-from,
.menu-leave-to
{
  transition: all 0.3s ease;
  top: -620px;
}

.menu-enter-active,
.menu-leave-active
{
  transition: all 0.3s ease;
  top: -620px;
}


.menu-enter-to,
.menu-leave-from
{
  transition: all 0.3s ease;
  top: 0;
}

</style>