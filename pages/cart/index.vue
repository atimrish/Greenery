<script setup>
import {useUserStore} from "~/store/user";
import {storeToRefs} from "pinia";
import {useProductStore} from "~/store/product";

const userStore = await useUserStore();
await userStore.getMe();
const {user} = await storeToRefs(userStore);

const productStore = await useProductStore();
await productStore.getAllProducts();
const {products} = await storeToRefs(productStore);

const inCart = ref([]);

user.value.cart.forEach(item => {
  inCart.value.push({
    product: products.value.find(i => i._id === item.product_id),
    count: item.count
  })
})

</script>

<template>
  <div class="xl:w-[1200px] m-auto min-h-screen">
    <h2 class="text-[24px]">Корзина</h2>

    <div class="flex justify-between items-center my-8">
      <div class="flex items-center">
        <Checkbox/>
        <div class="ml-4">Выбрать все</div>
      </div>

      <div>
        Удалить выбранные
      </div>

    </div>

    <div>
      <CartItem v-for="i in inCart" :data="i.product" :count="i.count"/>
    </div>

  </div>
</template>

<style scoped>

</style>