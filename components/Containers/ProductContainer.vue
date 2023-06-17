<script setup>
import Product from "~/components/Product/Product.vue";
import Pagination from "~/components/Pagination/Pagination.vue";
</script>

<template>
    <div class="w-full">
        <div class="w-full grid grid-cols-4 gap-x-14">
            <Product :product_id="1" />
            <Product :product_id="2" />
            <Product :product_id="3" />
            <Product :product_id="4" />
            <Product :product_id="5" />
        </div>
        <Pagination/>
    </div>

</template>

<style scoped>

</style>