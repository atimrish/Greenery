<script setup>
import Rating from "~/components/Product/Rating.vue";
import AddImage from "~/components/Review/AddImage.vue";
import SubmitButton from "~/components/Button/SubmitButton.vue";
import {useProductStore} from "~/store/product";

const productStore = useProductStore();
const route = useRoute();
const product_id = route.params.id;

const reviewSort = ref('p');
const ratingValue = ref(0);
const reviewText = ref('');

const images = ref([]);

const handlePushImage = (value) => {
  images.value = value.value;
}

const handlePushComment = async () => {

  if ((ratingValue.value !== 0) && (reviewText.value !== '')) {

    const data = {
      rating: ratingValue.value,
      text: reviewText.value,
      files: images.value.map(item => item.file)
    };

    await productStore.pushComment(product_id, data);

  } else {
    console.log('Заполните поля')
  }
}

</script>

<template>
  <form @submit.prevent="handlePushComment">
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
    <AddImage class="my-8 block text-center w-fit" @pushImages="handlePushImage"/>
    <SubmitButton class="bg-yellow text-white py-2 w-fit text-center px-3" text="Оставить отзыв"/>
  </form>
</template>

<style scoped>

</style>