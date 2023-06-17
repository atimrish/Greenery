<script setup>
import Checkbox from "~/components/Checkbox/Checkbox.vue";
import AddToCart from "~/components/Product/AddToCart.vue";

const props = defineProps({
  title: {
    type: String,
    default: 'Название товара'
  },
  price: {
    type: Number,
    default: 0
  },
  product_id: {
    type: Number,
    required: true
  }
});

</script>

<template>
  <div class="py-6 flex justify-between border-b-2 border-b-gray">
    <div class="flex justify-between w-[320px]">
      <Checkbox :id="product_id"/>
      <div class="bg-lightgreen w-[100px] h-[100px]">

      </div>
      <div class="flex flex-col justify-between">
        <div class="text-[20px]">{{title}}</div>
        <div class="delete-favorite">Удалить</div>
      </div>
    </div>

    <div class="flex flex-col justify-between">
      <div class="text-[20px] text-right">{{price}} ₽</div>
      <AddToCart class="py-1 px-4 bg-yellow text-white"/>
    </div>
  </div>
</template>

<style scoped>
.delete-favorite::before {
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url("~/assets/img/delete_favorite.svg");
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 5px;
}
</style>