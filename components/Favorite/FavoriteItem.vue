<script setup>
import Checkbox from "~/components/Checkbox/Checkbox.vue";
import AddToCart from "~/components/Product/AddToCart.vue";
import {useProductStore} from "~/store/product";
import {storeToRefs} from "pinia";
import {useUserStore} from "~/store/user";

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
    type: String,
    required: true
  }
});

const productStore = await useProductStore();
await productStore.getAllProducts();
const {products} = await storeToRefs(productStore);

const cur = products.value.find(item => item._id === props.product_id);

const handlerDelete = async () => {
  await productStore.deleteFromFavorites(props.product_id);
  await useUserStore().getMe();
}

</script>

<template>
  <div class="py-6 flex justify-between border-b-2 border-b-gray">
    <div class="flex justify-between w-[620px]">
      <Checkbox :id="product_id"/>
      <div class="bg-lightgreen w-[100px] h-[100px] shrink-0">
        <img :src="'/photo/product/' + cur.photos[0]" alt="" class="w-full h-full object-cover object-center">
      </div>
      <div class="flex flex-col justify-between">
        <div class="text-[20px]">
          <NuxtLink :to="'/product/' + product_id">{{ cur.title }}</NuxtLink>
        </div>
        <div class="delete-favorite cursor-pointer" @click="handlerDelete">Удалить</div>
      </div>
    </div>

    <div class="flex flex-col justify-between">
      <div class="text-[20px] text-right">{{ cur.price }} ₽</div>
      <AddToCart class="py-1 px-4 bg-yellow text-white" :product_id="product_id"/>
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