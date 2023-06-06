<script setup>
import Product from "~/components/Product/Product.vue";
import Pagination from "~/components/Pagination/Pagination.vue";
</script>

<template>
    <div class="w-full">
        <div class="w-full grid grid-cols-4">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <Pagination/>
    </div>

</template>

<style scoped>

</style>