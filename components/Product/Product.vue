<script setup>
import AddToCart from "~/components/Product/AddToCart.vue";
import AddToFavorites from "~/components/Product/AddToFavorites.vue";

const props = defineProps({
    productData: {
      type: Object,
      required: true
    }
});

let ratings = 0;

props.productData.reviews.forEach(i => {
  ratings += i.rating
})

const rat_value = ratings / props.productData.reviews.length - (ratings / props.productData.reviews.length % 0.01);

</script>

<template>
    <div class="bg-lightgreen w-[260px] h-[360px] p-4 mb-24">
        <div class="flex justify-between">
            <div class="flex items-center">
                <div class="w-[25px] h-[25px]">
                    <img src="~/assets/img/star.svg" alt="" class="w-full h-full">
                </div>
                <div class="ml-2 font-bold max-h-[30px]">{{ isNaN(rat_value) ? 0 : rat_value }}</div>
            </div>
            <AddToFavorites
                class="w-[25px] h-[25px]"
                :product_id="productData._id"
            />
        </div>
        <div class="w-full h-[200px] my-4 mx-auto">
            <NuxtLink
                :no-prefetch="true"
                :to="'/product/' + productData._id"
                class="block w-full h-full"
            >
              <img :src="'/photo/product/' + productData.photos[0]" alt="" class="w-full h-full">
            </NuxtLink>

        </div>
        <div class="text-center text-[20px] max-h-[30px] overflow-hidden whitespace-nowrap overflow-ellipsis">
          <NuxtLink
              :no-prefetch="true"
              :to="'/product/' + productData._id"

              class="block w-full h-full"
          >
            {{productData.title}}
          </NuxtLink>

        </div>
        <div class="text-center my-2">{{productData.price}} ₽</div>
        <AddToCart
            class="text-center mt-2 py-3 px-16 w-full mx-auto text-white bg-green"
            :product_id="productData._id"
        />
    </div>
</template>

<style scoped>

</style>