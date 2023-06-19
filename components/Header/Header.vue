<script setup>
import {useAuthStore} from "~/store/auth";

import HeaderSearch from "~/components/Header/HeaderSearch.vue";
import Button from "~/components/Button/Button.vue";
import Register from "~/components/Popup/Register.vue";
import AuthPopup from "~/components/Popup/AuthPopup.vue";
import {useRouter} from "#app";
import {storeToRefs} from "pinia";
import {usePageStore} from "~/store/page";
import Menu from "~/components/Popup/Menu.vue";
const router = useRouter();

const authStore = useAuthStore();
await authStore.verify();

const registerPopupOpen = ref(false);
const authPopupOpen = ref(false);
const {isAuth, isAdmin} = storeToRefs(authStore)

const pageStore = usePageStore();
const {currentPage} = storeToRefs(pageStore);

const menuPopupIsOpen = ref(false);

const openRegisterPopup = () => {
  authPopupOpen.value = false;
  registerPopupOpen.value = true;
}


const logoutHandler = async () => {
  await authStore.logout();
  await router.push('/');
}

const changeMenuPopup = () => {
  menuPopupIsOpen.value = !menuPopupIsOpen.value
}


</script>

<template>
  <header class="md:h-[70px] w-full flex items-center md:pr-[150px]">
    <div class="relative w-[90px] h-full shrink-0">
      <div class="h-[40px] w-[40px] absolute top-[15px] left-[24px] shrink-0 z-20" >
        <svg
            width="32"
            height="27"
            viewBox="0 0 32 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-full menu"
            @click="changeMenuPopup"
            :class="{'menu-opened': menuPopupIsOpen}"
        >
          <rect width="32" height="7" rx="3.5" fill="#E8ECE8" />
          <rect y="20" width="32" height="7" rx="3.5" fill="#E8ECE8"/>
          <rect y="10" width="32" height="7" rx="3.5" fill="#E8ECE8"/>
        </svg>
      </div>
    </div>
    <div class="md:h-[627px] md:w-[90px] bg-darkgreen absolute top-0 left-0 z-10"></div>
    <div class="flex justify-between w-full items-center h-full">
      <div class="text-4xl shrink-0 ml-4">
        <nuxt-link to="/" class="block w-[190px] h-[50px]">
          <img src="~/assets/img/greenery.svg" alt="" class="w-full h-full object-center object-contain">
        </nuxt-link>
      </div>
      <div class="flex items-center xl:w-[60%] justify-between h-full">
        <HeaderSearch class="shrink-0"/>
        <div class="flex shrink-0 h-full">

          <Button
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all"
              v-if="currentPage !== '/admin'"
          >
            <NuxtLink class="block w-full h-full" to="/favorite">избранное</NuxtLink>
          </Button>

          <Button
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all"
              v-else
          >
            <nuxt-link class="block w-full h-full" to="/admin/category">категория</nuxt-link>
          </Button>


          <Button
              v-if="isAuth && isAdmin && (currentPage !== '/admin')"
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all">
            <nuxt-link class="block w-full h-full" to="/admin/category">админ</nuxt-link>
          </Button>

          <Button
              v-else-if="isAuth && (currentPage !== '/profile') && (currentPage !== '/admin')"
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all">
            <nuxt-link class="block w-full h-full" to="/profile">профиль</nuxt-link>
          </Button>

          <Button
              v-else-if="!isAuth && !(currentPage === '/profile')"
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all"
              @click="authPopupOpen = true"
          >войти
          </Button>


          <Button
              v-else-if="currentPage === '/profile' || currentPage === '/admin'"
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all"
              @click="logoutHandler"
          >выйти
          </Button>

          <Button
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all"
              v-if="currentPage !== '/admin'"
          >
            <NuxtLink class="block w-full h-full" to="/cart">корзина</NuxtLink>
          </Button>

          <Button
              class="h-full text-center px-6 hover:text-white hover:bg-darkgreen leading-[65px] transition-all"
              v-else
          >
            <nuxt-link class="block w-full h-full" to="/admin/product">товары</nuxt-link>
          </Button>

        </div>
      </div>
      <Register
          :register-popup-open="registerPopupOpen"
          @closePopup="registerPopupOpen = false"
      />
      <AuthPopup
          :auth-popup-open="authPopupOpen"
          @closePopup="authPopupOpen = false"
          @openRegisterPopup="openRegisterPopup"
      />
    </div>
    <Menu :is-open="menuPopupIsOpen" />
  </header>
</template>

<style scoped>

.menu > * {
  transition: 0.2s ease-in-out;
}


.menu-opened > :first-child {
  transform: rotate(45deg) translate(7px, -3px);
}

.menu-opened > :nth-child(3) {
  transform: rotate(45deg) translate(7px, -13px);
}

.menu-opened > :nth-child(2) {
  transform: rotate(-45deg) translate(-17px);
}

</style>