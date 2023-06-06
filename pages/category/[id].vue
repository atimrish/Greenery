<script setup>
import BreadCrumbs from "~/components/BreadCrumbs/BreadCrumbs.vue";
import Button from "~/components/Button/Button.vue";
import ProductContainer from "~/components/Containers/ProductContainer.vue";
</script>

<template>
    <div class="xl:w-[1200px] mx-auto">
        <div class="h-[600px]"></div>
        <BreadCrumbs/>
        <h2 class="text-[24px]">Категория {количество товаров}</h2>
        <div class="my-4">Сначала дешевые</div>
        <Button class=" text-center bg-yellow py-2 text-white w-[150px]">выбрать фильтр</Button>
        <ProductContainer class="my-16"/>
    </div>
</template>

<style scoped>

</style>