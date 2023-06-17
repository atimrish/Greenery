<script setup>
import PopularCategory from "../components/PopularCategory/PopularCategory.vue";
import {usePageStore} from "~/store/page";

useHead({
  title: 'Greenery'
})

const pageStore = usePageStore();
pageStore.setPage('/');

const renderBullet = (index, classname) => {
  return `<span class="${classname}"></span>`;
}

</script>

<template>
  <div>
    <Swiper
        class="overflow-hidden h-[600px]"

        :el="'.swiper-pagination'"
        :modules="[SwiperPagination, SwiperEffectFade, SwiperFreeMode]"
        :allow-touch-move="true"
        :effect="'fade'"
        :fade-effect="{
          crossFade: true
        }"
        :pagination="{
          type: 'bullets',
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
          renderBullet: renderBullet
        }
        "
        :direction="'vertical'"
        :watch-overflow="false"
        :slides-per-view="1"
    >
      <SwiperSlide>
        <div class="h-[600px] xl:w-[1200px] m-auto flex mt-2 items-center">
          <div class="w-[40%]">
            <h2 class="xl:text-[56px] -mt-12 font-bold">Товары</h2>
            <div class="xl:text-[48px] font-light">для рассады</div>
            <div class="font-light">
              Быстро растущий садовый однолетник или
              вечнозеленое растение в оранжерее и зимнем
              саду покорит красотой абрикосовых цветков
              с широкими темно-оранжевыми полосами,
              расходящимися из темных центров.
            </div>

          </div>

          <div class="w-[50%] ml-[10%] relative">
            <div class="w-full h-[350px]">
              <img src="~/assets/img/first_slide.jpg" alt="" class="w-full h-full object-center object-cover">
            </div>

            <div class="absolute w-[300px] h-[300px] bottom-[-60px] right-[-60px] bg-darkgreen -z-10"></div>
            <div class="absolute w-[400px] h-[300px] top-[-60px] left-[-60px] border -z-10"></div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="h-[600px] xl:w-[1200px] m-auto flex mt-2 items-center">
          <div class="w-[40%]">
            <h2 class="xl:text-[56px] -mt-12 font-bold">Всё</h2>
            <div class="xl:text-[48px] font-light">для газона</div>
            <div class="font-light">
              Найдите всё для стрижки, выращивания
              и ухаживания за вашим газоном.
              Правильно постриженный газон создаст
              приятную атмосферу на вашем участке
            </div>

          </div>

          <div class="w-[50%] ml-[10%] relative">
            <div class="w-full h-[350px]">
              <img src="~/assets/img/second_slide.jpg" alt="" class="w-full h-full object-center object-cover">
            </div>

            <div class="absolute w-[300px] h-[300px] bottom-[-60px] right-[-60px] bg-darkgreen -z-10"></div>
            <div class="absolute w-[400px] h-[300px] top-[-60px] left-[-60px] border -z-10"></div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="h-[600px] xl:w-[1200px] m-auto flex mt-2 items-center">
          <div class="w-[40%]">
            <h2 class="xl:text-[56px] -mt-12 font-bold">Вазы</h2>
            <div class="xl:text-[48px] font-light">для цветов</div>
            <div class="font-light">
              Этот классический аксессуар
              преимущественно имеет строгие
              сдержанные формы и выглядит уместно
              в любом интерьере.
            </div>

          </div>

          <div class="w-[50%] ml-[10%] relative">
            <div class="w-full h-[350px]">
              <img src="~/assets/img/third_slide.jpg" alt="" class="w-full h-full object-center object-cover">
            </div>

            <div class="absolute w-[300px] h-[300px] bottom-[-60px] right-[-60px] bg-darkgreen -z-10"></div>
            <div class="absolute w-[400px] h-[300px] top-[-60px] left-[-60px] border -z-10"></div>
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-pagination flex flex-col mr-12"></div>
    </Swiper>

    <div class="xl:w-[1200px] m-auto">
      <section>
        <h2 class="text-center xl:text-[48px] mb-16">Популярные категории</h2>
        <div class="flex justify-between">
          <PopularCategory title="Вазы для цветов">
            <img src="~/assets/img/vz.svg" alt="" class="mx-auto">
          </PopularCategory>
          <PopularCategory title="инструменты">
            <img src="~/assets/img/tool.svg" alt="" class="mx-auto">
          </PopularCategory>
          <PopularCategory title="саженцы">
            <img src="~/assets/img/plant.svg" alt="" class="mx-auto">
          </PopularCategory>
          <PopularCategory title="семена">
            <img src="~/assets/img/seeds.svg" alt="" class="mx-auto">
          </PopularCategory>
        </div>
      </section>

      <section>
        <h2 class="text-center xl:text-[48px] mb-16">Товары для сада</h2>
        <div class="xl:h-[218px] bg-green flex justify-between mb-16">
          <div class="shrink-0 relative w-[40%]">
            <img src="~/assets/img/brbr.png" alt="" class="h-full w-full absolute top-0 -left-1 object-cover">
          </div>
          <div class="text-white px-8">
            <h2 class="text-[36px] text-center my-6">Пора косить газон</h2>
            <div class="text-center">Самое время прикупить газонокосилку,
              и подготовитьсвой двор к предстоящим летним
              посиделкам в кругу приятных тебе людей, а также
              организовать порядок в своемм участке
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="w-[90%] border border-black-2 pt-10 pb-24 px-16 relative mb-24">
          <div class="w-[60%]">
            <h2 class="text-[36px]">Газонокосилки</h2>
            <div>Газонокосилка — техника для стрижки газона
              и создания ровного ландшафта. Принцип работы
              следующий: двигатель, расположенный на платформе с
              колесами, приводит в движение нож, который, вращаясь,
              срезает траву и создает мощный воздушный поток
            </div>
          </div>
          <div
              class="absolute -bottom-7 py-[10px] px-[15px] text-center bg-yellow text-white text-[24px] cursor-pointer">
            Подробнее
          </div>
          <div class="absolute w-[320px] h-[300px] bg-green top-12 -right-28">
            <img src="~/assets/img/br_icon.svg" alt=""
                 class="w-[80%] h-[80%] object-contain object-center mx-auto my-[10%]">
          </div>
        </div>
      </section>

      <section>
        <div class="mb-16 flex justify-between items-center">
          <div class="xl:text-[48px]">Отзывы о нас</div>
          <div class="px-6 py-3 bg-yellow text-white">Оставить отзыв</div>
        </div>
      </section>

    </div>

  </div>
</template>

<style>
.custom-bullet {
  width: 8px;
  height: 50px;
  background-color: #B4B8B2;
  border-radius: 5px;
  margin: 10px 0;
}
.custom-bullet-active {
  width: 8px;
  height: 50px;
  background-color: #A88C1B;
  border-radius: 5px;
  margin: 10px 0;
}
</style>