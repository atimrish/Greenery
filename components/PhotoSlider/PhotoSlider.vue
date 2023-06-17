<script setup>
const props = defineProps({
  photos: {
    type: Array,
    default: []
  }
});
</script>

<template>
  <div class="xl:w-[455px] xl:h-[455px] bg-lightgreen">
    <Swiper class="w-full h-full">
      <SwiperSlide v-for="photo in photos" class="w-full h-full">
        <div class="w-full h-full">
          <img :src="'/photo/product/' + photo" alt="" class="w-full h-full object-cover object-center">
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>

</style>