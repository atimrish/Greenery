<script setup>
import AddToCart from "~/components/Product/AddToCart.vue";
import AddToFavorites from "~/components/Product/AddToFavorites.vue";

const props = defineProps({
    product_id: {
        type: Number,
        required: true
    },
    path: {
        type: String,
        default: 'no-product.png'
    },
    rating: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        default: 'Название товара'
    }
});
</script>

<template>
    <div class="bg-lightgreen w-[260px] h-[360px] p-4">
        <div class="flex justify-between">
            <div class="flex items-center">
                <div class="w-[25px] h-[25px]">
                    <img src="~/assets/img/star.svg" alt="" class="w-full h-full">
                </div>
                <div class="ml-2 font-bold">{{ rating }}</div>
            </div>
            <AddToFavorites
                class="w-[25px] h-[25px]"
            />
        </div>
        <div class="w-full h-[200px] my-4 mx-auto">
            <img src="" alt="" class="w-full h-full">
        </div>
        <div class="text-center text-[20px]">{{title}}</div>
        <div class="text-center">{{price}} ₽</div>
        <AddToCart
            v-text="'В корзину'"
            class="text-center mt-2 py-3 text-white bg-green"
        />
    </div>
</template>

<style scoped>

</style>