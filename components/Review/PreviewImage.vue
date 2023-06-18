<script setup>

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  prop_id: {
    type: Number,
    required: true
  }
});

const emits = defineEmits([
    'deleteImage'
])


</script>

<template>
    <div class="w-[200px] h-[200px] relative">
      <div
          class="absolute delete-image w-[30px] h-[30px] bg-center bg-no-repeat bg-cover top-1 right-1 z-20"
          @click="emits('deleteImage', prop_id)"
      />
      <img :src="src" alt="" class="object-center object-cover w-full h-full">
    </div>
</template>

<style scoped>
.delete-image {
  background-image: url("~/assets/img/delete_image.svg");
}
</style>