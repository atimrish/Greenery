<script setup>
import Product from "~/components/Product/Product.vue";
import Pagination from "~/components/Pagination/Pagination.vue";
import {useProductStore} from "~/store/product";
import {storeToRefs} from "pinia";

const route = await useRoute();
const current_category = route.params.title;

const productStore = await useProductStore();
await productStore.getAllProducts();
const {products} = await storeToRefs(productStore);



</script>

<template>
    <div class="w-full">
        <div class="w-full grid grid-cols-4 gap-x-14">
            <Product
                v-for="i in products.filter(item => item.category === current_category)"
                :product-data="i"
            />

        </div>
        <Pagination/>
    </div>

</template>

<style scoped>

</style>