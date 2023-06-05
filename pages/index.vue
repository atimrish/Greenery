<script setup>
import PopularCategory from "../components/PopularCategory/PopularCategory.vue";


</script>

<template>
  <div>
    <div class="h-[600px]"></div>
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
            <img src="~/assets/img/br_icon.svg" alt="" class="w-[80%] h-[80%] object-contain object-center mx-auto my-[10%]">
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

<style scoped>

</style>