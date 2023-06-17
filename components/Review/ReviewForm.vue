<script setup>
import Rating from "~/components/Product/Rating.vue";

const reviewSort = ref('p');
const ratingValue = ref(0);
const reviewText = ref('');

</script>

<template>
  <form>
    <div class="flex justify-between mb-8 items-center">
      <Rating v-model="ratingValue"/>
      <ReviewSort v-model="reviewSort"/>
    </div>
    <Textarea
        v-model="reviewText"
        class="block border w-full p-2"
        rows="1"
        placeholder="Введите текст"
    />

    <Button class="bg-yellow text-white px-6 py-2">Оставить отзыв</Button>
  </form>
</template>

<style scoped>

</style>