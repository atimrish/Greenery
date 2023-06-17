<script setup>
import SubmitButton from "~/components/Button/SubmitButton.vue";
import AnimatedTextInput from "~/components/TextInput/AnimatedTextInput.vue";
import {useAuthStore} from "~/store/auth";

const props = defineProps({
  authPopupOpen: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits([
  'closePopup',
  'openRegisterPopup',
]);

const authData = ref({
  login: '',
  password: ''
});

const onSubmit = async () => {
  const authStore = useAuthStore();
  await authStore.login(authData.value);
  emits('closePopup');
};

</script>

<template>
  <teleport to="body">
    <transition name="popup">
      <div class="auth-popup fixed w-[480px] bg-white z-10 shadow-2xl" v-if="authPopupOpen">
        <form @submit.prevent="onSubmit" class="w-full px-12 py-12 relative">
          <div
              class="close_popup w-[30px] h-[30px] absolute right-6"
              @click="emits('closePopup')"
          />
          <h2 class="text-[36px] text-center my-6">Вход</h2>
          <AnimatedTextInput
              placeholder="Email или телефон"
              id="email"
              class="w-full"
              v-model="authData.login"
          />

          <AnimatedTextInput
              placeholder="Пароль"
              id="email"
              class="w-full"
              type="password"
              v-model="authData.password"
          />

          <div class="text-blue my-6">Забыли пароль?</div>

          <SubmitButton
              text="Войти"
              class="bg-yellow text-white mx-auto mt-16 py-2 w-full block"
          />

          <div class="my-4">Нет аккаунта?
            <span
                class="text-blue cursor-pointer"
                @click="emits('openRegisterPopup')"
            >Зарегистрируйтель</span>
          </div>

        </form>

      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.auth-popup {
  left: calc(50% - 240px);
  top: 150px;
}

.close_popup {
  background-image: url("~/assets/img/close_popup.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.popup-enter-from,
.popup-leave-to {
  transition: all 0.5s ease;
  opacity: 0;
  top: 250px;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s ease;
  top: 200px;
}


.popup-enter-to,
.popup-leave-from {
  transition: all 0.5s ease;
  opacity: 1;
  top: 150px;
}

</style>