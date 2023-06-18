<script setup>
import PhotoSlider from "~/components/PhotoSlider/PhotoSlider.vue";
import {useProductStore} from "~/store/product";
import AddToFavorites from "~/components/Product/AddToFavorites.vue";
import AddToCart from "~/components/Product/AddToCart.vue";
import {storeToRefs} from "pinia";


const route = await useRoute();
const product_id = route.params.id;


const productStore = await useProductStore();
await productStore.getAllProducts();
await productStore.getCurrentProduct(product_id);


const {currentProduct} = await storeToRefs(productStore);
let ratings = 0;




await useHead({
  title: currentProduct.value.title
});

currentProduct.value.reviews.forEach((item) => {
  ratings += item.rating;
});
ratings = ratings / currentProduct.value.reviews.length;
ratings = ratings - (ratings % 0.01);


</script>

<template>
  <div class="xl:w-[1200px] mx-auto">
    <BreadCrumbs/>

    <div class="flex">
      <PhotoSlider :photos="currentProduct.photos"/>

      <div class="ml-6">
        <h3 class="text-[24px]">{{ currentProduct.title }}</h3>

        <div class="flex items-center my-6">
          <DynamicRating :rating="ratings"/>
          <div class="ml-2">{{ ratings }}</div>
          <div class="text-[16px] text-gray ml-4">{{ currentProduct.reviews.length }} отзывов</div>
        </div>


        <div class="mb-16">
          <table class="w-full">
            <caption class="text-left text-[20px] mb-4">Характеристики:</caption>
            <tbody>
            <tr v-for="ch in currentProduct.characteristics" class="font-light">
              <td>{{ ch.title }}</td>
              <td class="text-right">{{ ch.value }}</td>
            </tr>
            </tbody>
          </table>
          <div class="mt-4">Все характеристики</div>
        </div>

        <div>
          <div class="text-[32px] mb-8">{{ currentProduct.price }} ₽</div>

          <div class="flex items-center h-[46px]">
            <AddToFavorites :product_id="product_id" class="mr-4 bg-yellow w-[46px] add-to-fav h-full p-1"/>
            <AddToCart :product_id="product_id" class="text-white bg-yellow h-full leading-[46px] px-6"/>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="md:text-[24px] my-8">Характеристики</h2>
      <div>
        <table class="w-full">
          <tbody>
          <tr v-for="ch in currentProduct.characteristics" class="font-light my-8">
            <td class="text-[20px]">{{ ch.title }}</td>
            <td class="text-right font-bold">{{ ch.value }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <h2 class="md:text-[24px] my-8">Описание</h2>
      <div class="md:text-[18px] font-light">{{ currentProduct.description }}</div>


      <h2 class="md:text-[24px] mt-8">Отзывы</h2>
      <div class="my-4">{{ ratings }}</div>

      <ReviewForm/>

      <Review
          v-for="i in currentProduct.reviews"
          :comment-data="i"
      />
    </div>

  </div>
</template>

<style scoped>
.add-to-fav:deep(path) {
  fill: white;
}
</style>