<script setup>
import {useUserStore} from "~/store/user";
import Rating from "~/components/Review/Rating.vue";
import AttachedImage from "~/components/Review/AttachedImage.vue";


const props = defineProps({
  commentData: {
    type: Object,
    required: true
  }
});

const userStore = useUserStore();
const userData = ref({});

onMounted(async () => {
  const data = await userStore.getUserById(props.commentData.user_id);
  userData.value = data.value;
})

</script>

<template>
  <div class="flex my-4 py-4 border-t border-t-gray justify-between">


    <div class="flex">
      <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
        <img src="~/assets/img/no-profile.png" alt="" class="w-full h-full object-center object-cover">
      </div>
      <div class="ml-4">
        <div class="font-light">{{ userData.surname }} {{ userData.name }}</div>
        <div class="font-light mb-1 text-[14px]">{{ new Date(commentData.created_at).toLocaleDateString() }}</div>
        <Rating :value="commentData.rating"/>
        <div>{{ commentData.text }}</div>
      </div>
    </div>


    <div class="flex">
      <AttachedImage v-for="i in commentData.photos" :path="i" class="ml-2"/>
    </div>

  </div>
</template>

<style scoped>

</style>