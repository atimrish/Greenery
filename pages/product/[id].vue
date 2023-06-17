<script setup>
import PhotoSlider from "~/components/PhotoSlider/PhotoSlider.vue";
import {useProductStore} from "~/store/product";
import {storeToRefs} from "pinia";



const route = useRoute();
const product_id = route.params.id;


const productStore = useProductStore();
await productStore.getAllProducts();
await productStore.getCurrentProduct(product_id);
const {currentProduct} = storeToRefs(productStore)


useHead({
  title: currentProduct.value.title
});

</script>

<template>
  <div class="xl:w-[1200px] mx-auto">
    <BreadCrumbs/>

    <div class="flex">
      <PhotoSlider :photos="currentProduct.photos"/>

      <div>
        <h3 class="text-[24px] mb-8">Название товара</h3>
        <DynamicRating/>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>