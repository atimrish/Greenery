<script setup>
import {useUserStore} from "~/store/user";
import {storeToRefs} from "pinia";
import {useProductStore} from "~/store/product";

const userStore = useUserStore();
await userStore.getMe();
const {user} = await storeToRefs(userStore);


const productStore = useProductStore();

const props = defineProps({
  product_id: {
    type: String,
    required: true
  }
});

const inCart = ref(false);

const checkInCart = () => {
  for (const item of  user.value.cart) {
    if (item.product_id === props.product_id) {
      inCart.value = true;
      return;
    }
  }
  inCart.value = false;
}

onMounted(() => {
  checkInCart();
})

const handleAdd = async () => {
  await productStore.addToCart(props.product_id);
  await userStore.getMe();
  checkInCart();
}

const handleDelete = async () => {
  await productStore.deleteFromCart(props.product_id);
  await userStore.getMe();
  checkInCart();
}

</script>

<template>
  <div>
    <div v-if="!inCart" @click="handleAdd">В корзину</div>
    <div v-else @click="handleDelete">В корзине</div>
  </div>

</template>

<style scoped>

</style>