<script setup>
import HeaderSearch from "~/components/Header/HeaderSearch.vue";
import Button from "~/components/Button/Button.vue";
</script>

<template>
  <header class="xl:h-[70px] w-full flex items-center xl:pr-[150px]">
    <div class="relative w-[90px] h-full shrink-0">
      <div class="h-[40px] w-[40px] absolute top-[15px] left-[24px] shrink-0">
        <img src="~/assets/img/burger.svg" alt="" class="object-center object-contain w-full h-full">
      </div>
    </div>
    <div class="xl:h-[627px]  xl:w-[90px] bg-darkgreen absolute top-0 left-0 -z-10"></div>
    <div class="flex justify-between w-full items-center h-full">
      <div class="text-4xl shrink-0 ml-4">
        <nuxt-link to="/">LOGO</nuxt-link>
      </div>
      <div class="flex items-center xl:w-[60%] justify-between h-full">
        <HeaderSearch class="shrink-0"/>
        <div class="flex shrink-0 h-full">

          <Button
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all">избранное</Button>

          <Button
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all">профиль</Button>

          <Button
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all">корзина</Button>

        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>