<script setup>
import {useProductStore} from "~/store/product";
import {useUserStore} from "~/store/user";
import {storeToRefs} from "pinia";


const productStore = useProductStore();
const userStore = useUserStore();
await userStore.getMe();

const {user} = await storeToRefs(userStore)


const props = defineProps({
  product_id: {
    type: String,
    required: true
  }
})

const inFavorites = ref(false);

onMounted(() => {
  inFavorites.value = user.value.favorites.includes(props.product_id);
});

const handlerClick = async () => {
  if (!inFavorites.value) {
    await productStore.addToFavorites(props.product_id);
  } else {
    await productStore.deleteFromFavorites(props.product_id);
  }
  await userStore.getMe();
  inFavorites.value = user.value.favorites.includes(props.product_id);
}

</script>

<template>
  <div @click="handlerClick">
    <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"
         class="h-full w-full">
      <path opacity="0.964" :fill-rule="inFavorites ? 'nonzero' : 'evenodd'" clip-rule="evenodd"
            d="M6.56356 0.580184C8.36263 0.411703 9.98358 0.861969 11.4264 1.93098C11.8923 2.35589 12.3508 2.78979 12.8018 3.23265C13.3036 2.72253 13.8276 2.23952 14.3736 1.78362C16.3526 0.486321 18.4647 0.224345 20.7101 0.997702C22.5431 1.75011 23.812 3.0518 24.5169 4.90273C25.2997 7.35725 24.8904 9.584 23.2889 11.583C20.3499 14.522 17.4108 17.461 14.4719 20.4C13.5653 21.0375 12.5993 21.1357 11.5738 20.6948C11.418 20.6087 11.2706 20.5105 11.1317 20.4C8.19272 17.461 5.25368 14.522 2.3147 11.583C0.713208 9.584 0.303876 7.35725 1.0867 4.90273C2.09387 2.42237 3.91949 0.981522 6.56356 0.580184ZM7.05476 2.1029C8.45271 2.07485 9.68071 2.50874 10.7387 3.40457C11.2791 3.94489 11.8194 4.48521 12.3597 5.02553C12.6544 5.18924 12.9491 5.18924 13.2439 5.02553C13.7842 4.48521 14.3245 3.94489 14.8648 3.40457C16.4538 2.10817 18.2221 1.79708 20.1698 2.4713C22.4737 3.56628 23.5134 5.39191 23.2889 7.94816C23.1338 8.95502 22.7245 9.83917 22.0609 10.6006C19.2037 13.4578 16.3466 16.3149 13.4895 19.172C13.031 19.4668 12.5725 19.4668 12.1141 19.172C9.25695 16.3149 6.39985 13.4578 3.54269 10.6006C2.35386 9.16859 1.99365 7.54764 2.46206 5.73777C3.22833 3.55793 4.75922 2.34629 7.05476 2.1029Z"
            fill="#2C302D"/>
    </svg>
  </div>
</template>

<style scoped>

</style>