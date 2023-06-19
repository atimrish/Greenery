<script setup>
import FavoriteItem from "~/components/Favorite/FavoriteItem.vue";
import {useUserStore} from "~/store/user";
import {storeToRefs} from "pinia";

const userStore = await useUserStore();
await userStore.getMe();
const {user} = await storeToRefs(userStore);

</script>

<template>
  <div class="mt-24 border-t-gray border-t-2 mb-24">
    <FavoriteItem
        v-for="i of user.favorites"
        :product_id="i"
    />
  </div>
</template>

<style scoped>

</style>