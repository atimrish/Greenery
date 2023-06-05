<script setup>
import {ref} from 'vue';
import SubmitButton from "~/components/Button/SubmitButton.vue";
const surname = ref('');
const name = ref('');
const phone = ref('');
const email = ref('');

</script>

<template>
  <div>
    <h3 class="text-center text-[24px] mb-8">Профиль</h3>
    <div class="h-[200px] w-[200px] rounded-full mx-auto overflow-hidden">
      <img src="~/assets/img/no-profile.png" alt="" class="w-full h-full">
    </div>
    <h3 class="text-center text-[24px] my-8">Основная информация</h3>
    <form class="mx-auto xl:w-[600px] mb-16">
      <TextInput id="surname" label="Фамилия" :model-value="surname"/>
      <TextInput id="name" label="Имя" :model-value="name"/>
      <TextInput id="phone" label="Телефон" :model-value="phone"/>
      <TextInput id="email" label="Email" :model-value="email"/>
      <div class="text-[20px]">Смена пароля ></div>
      <SubmitButton
          text="Сохранить"
          class="px-5 py-2 bg-yellow text-white my-4 text-[20px]"
      />
    </form>
  </div>

</template>

<style scoped>

</style>