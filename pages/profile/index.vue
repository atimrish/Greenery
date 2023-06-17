<script setup>
import {useUserStore} from "~/store/user";
import SubmitButton from "~/components/Button/SubmitButton.vue";
import auth from '~/middleware/auth';
import {usePageStore} from "~/store/page";

useHead({
  title: 'Профиль'
});


const userStore = useUserStore();
await userStore.getMe();
const userData = userStore.user;

const pageStore = usePageStore();
pageStore.setPage('/profile')


definePageMeta({
  middleware: [auth]
});

</script>

<template>
  <div>
    <h3 class="text-center text-[24px] mb-8">Профиль</h3>
    <div class="h-[200px] w-[200px] rounded-full mx-auto overflow-hidden">
      <img src="~/assets/img/no-profile.png" alt="" class="w-full h-full">
    </div>
    <h3 class="text-center text-[24px] my-8">Основная информация</h3>
    <form class="mx-auto xl:w-[600px] mb-16">
      <label for="surname">Фамилия</label>

      <TextInput
          id="surname"
          label="Фамилия"
          :model-value="userData.surname"
          class="h-[35px] border"
      />

      <label for="name">Имя</label>

      <TextInput
          id="name"
          label="Имя"
          :model-value="userData.name"
          class="h-[35px] border"
      />

      <label for="phone">Телефон</label>

      <TextInput
          id="phone"
          label="Телефон"
          :model-value="userData.phone"
          class="h-[35px] border"
      />

      <label for="email">Email</label>

      <TextInput
          id="email"
          label="Email"
          :model-value="userData.email"
          class="h-[35px] border"
      />

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