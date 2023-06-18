<script setup>
import BreadCrumbs from "~/components/BreadCrumbs/BreadCrumbs.vue";
import Button from "~/components/Button/Button.vue";
import ProductContainer from "~/components/Containers/ProductContainer.vue";
import RecentlyViewed from "~/components/RecentlyViewed/RecentlyViewed.vue";
import FilterPopup from "~/components/Popup/FilterPopup.vue";

const route = await useRoute();

const title = route.params.title;

await useHead({
  title:  title
});




const filterPopupIsOpen = ref(false);
const changeFilterPopup = () => {
  filterPopupIsOpen.value = !filterPopupIsOpen.value;
}

</script>

<template>
  <div class="xl:w-[1200px] mx-auto">
    <section>
      <div class="h-[600px] xl:w-[1200px] m-auto flex mt-2 items-center">
        <div class="w-[40%]">
          <h2 class="xl:text-[56px] -mt-12 font-bold">Товары</h2>
          <div class="xl:text-[48px] font-light">для рассады</div>
          <div class="font-light">
            Быстро растущий садовый однолетник или
            вечнозеленое растение в оранжерее и зимнем
            саду покорит красотой абрикосовых цветков
            с широкими темно-оранжевыми полосами,
            расходящимися из темных центров.
          </div>

        </div>

        <div class="w-[50%] ml-[10%] relative">
          <div class="w-full h-[350px]">
            <img src="~/assets/img/first_slide.jpg" alt="" class="w-full h-full object-center object-cover">
          </div>

          <div class="absolute w-[300px] h-[300px] bottom-[-60px] right-[-60px] bg-darkgreen -z-10"></div>
          <div class="absolute w-[400px] h-[300px] top-[-60px] left-[-60px] border -z-10"></div>
        </div>
      </div>
    </section>

    <section>
      <BreadCrumbs/>
      <h2 class="text-[24px]">{{ route.params.title }} {количество товаров}</h2>
      <div class="my-4">Сначала дешевые</div>
      <div class="flex justify-between items-center">
        <div>
          <Button class=" text-center bg-yellow py-2 text-white w-[150px]">выбрать фильтр</Button>
        </div>
        <div class="w-[36px] h-[36px] relative">
          <img src="~/assets/img/filter.svg" alt="" class="w-full h-full object-cover object-center cursor-pointer"
               @click="changeFilterPopup">
          <FilterPopup
              :is-open="filterPopupIsOpen"
          />
        </div>
      </div>

      <ProductContainer class="my-16"/>
    </section>

    <section>
<!--      <RecentlyViewed/>-->
    </section>

  </div>
</template>

<style scoped>

</style>