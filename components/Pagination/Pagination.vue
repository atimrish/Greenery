<script setup>
import PaginateItem from "~/components/Pagination/PaginateItem.vue";

const props = defineProps({
  pages: {
    type: Array,
    default: [1 ,2, 3, 4, 5]
  }
});
</script>

<template>
    <div>
        <div class="w-full text-[24px] text-center bg-yellow text-white py-4 cursor-pointer">Показать еще</div>
        <div class="w-fit mx-auto flex items-center mt-6">
            <div>
                <img src="~/assets/img/left_arrow.svg" alt="">
            </div>
            <PaginateItem
                v-for="page in pages"
                :num="page"
                :key="page"
                class="px-4 py-2 border border-gray mx-1 cursor-pointer rounded hover:border-black"
            />
            <div>
                <img src="~/assets/img/right_arrow.svg" alt="">
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>