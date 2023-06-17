<script setup>
import SubmitButton from "~/components/Button/SubmitButton.vue";
import AnimatedTextInput from "~/components/TextInput/AnimatedTextInput.vue";
import {useAuthStore} from "~/store/auth";

const props = defineProps({
  registerPopupOpen: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits([
    'closePopup',
]);

const user = ref({
  surname: '',
  name: '',
  phone: '',
  email: '',
  password: '',
  password_confirmation: ''
});


const onSubmit = async () => {
  const authStore = useAuthStore();
  await authStore.register(user.value);
  emits('closePopup');
}

</script>

<template>
  <teleport to="body">
    <transition name="popup">
      <div class="register-popup fixed w-[480px] bg-white z-10 shadow-2xl" v-if="registerPopupOpen">
        <form @submit.prevent="onSubmit" class="w-full px-12 py-12 relative">
          <div
              class="close_popup w-[30px] h-[30px] absolute right-6"
              @click="emits('closePopup')"
          />
          <h2 class="text-[36px] text-center my-6">Регистрация</h2>
          <AnimatedTextInput
              placeholder="Фамилия"
              id="surname"
              class="w-full"
              v-model="user.surname"
          />
          <AnimatedTextInput
              placeholder="Имя"
              id="name"
              class="w-full"
              v-model="user.name"
          />
          <AnimatedTextInput
              placeholder="Телефон"
              id="phone"
              class="w-full"
              v-model="user.phone"
          />
          <AnimatedTextInput
              placeholder="Email"
              id="email"
              class="w-full"
              v-model="user.email"
          />
          <AnimatedTextInput
              placeholder="Пароль"
              id="password"
              class="w-full"
              type="password"
              v-model="user.password"
          />
          <AnimatedTextInput
              placeholder="Подтвердите пароль"
              id="password_confirmation"
              class="w-full"
              type="password"
              v-model="user.password_confirmation"
          />
          <SubmitButton
              text="Зарегистрироваться"
              class="bg-yellow text-white mx-auto py-2 w-full block"
          />
        </form>

      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.register-popup {
  left: calc(50% - 240px);
  top: 150px;
}

.close_popup {
  background-image: url("~/assets/img/close_popup.svg");
  background-repeat: no-repeat;
  background-size: cover;
}



.popup-enter-from,
.popup-leave-to
{
  transition: all 0.5s ease;
  opacity: 0;
  top: 250px;
}

.popup-enter-active,
.popup-leave-active
{
  transition: all 0.5s ease;
  top: 200px;
}


.popup-enter-to,
.popup-leave-from
{
  transition: all 0.5s ease;
  opacity: 1;
  top: 150px;
}

</style>