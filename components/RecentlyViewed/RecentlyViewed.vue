<script setup>
import Product from "~/components/Product/Product.vue";

const props = defineProps({
  products: {
    type: Array,
    default: [1, 2, 3, 4, 5]
  }
});

</script>

<template>
  <div>
    <h2 class="text-[24px] text-center my-12">Вы недавно смотрели</h2>
    <Swiper
        :slides-per-view="4"
        :pagination="{
          el: '.swiper-pagination',
          type: 'bullets',
          bulletClass: 'swiper-bullet',
          bulletActiveClass: 'swiper-bullet-active',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class='${ className }'>${index + 1}</span>`;
          }
        }"
    >
      <SwiperSlide v-for="product in products">
        <Product :product_id="product"/>
      </SwiperSlide>
    </Swiper>

  </div>
</template>

<style scoped>
.swiper-bullet {
  width: 50px;
  height: 8px;
  border-radius: 4px;
  background-color: #B4B8B2;
}

.swiper-bullet-active {
  background-color: #A88C1B;
}

</style>