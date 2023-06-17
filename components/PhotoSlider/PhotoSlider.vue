<script setup>
const props = defineProps({
  photos: {
    type: Array,
    default: []
  }
});

const renderBullet = (index, className) => {
  return `<div class="w-[10px] h-[10px] rounded-full mx-1 cursor-pointer ${className}" :key="${index}"></div>`;
}

</script>

<template>
  <div class="xl:w-[500px] xl:h-[500px] bg-lightgreen mb-8">
    <Swiper
        class="w-full h-full"
        :modules="[SwiperPagination]"
        :pagination="
        {
          type: 'bullets',
          clickable: true,
          el: '.custom-swiper-pagination',
          bulletClass: 'custom-bullet-p',
          bulletActiveClass: 'custom-bullet-p-active',
          renderBullet: renderBullet,
        }"
    >
      <SwiperSlide v-for="photo in photos" class="w-full h-full">
        <div class="w-full h-full">
          <img :src="'/photo/product/' + photo" alt="" class="w-full h-full object-cover object-center">
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="custom-swiper-pagination flex justify-center my-2"></div>
  </div>
</template>

<style>
.custom-bullet-p {
  background-color: #B4B8B2;
}

.custom-bullet-p-active {
  background-color: #A88C1B;
}
</style>