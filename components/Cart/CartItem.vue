<script setup>

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
});


const count = ref(props.count)

</script>

<template>
  <div class="border-y border-y-gray flex py-6 justify-between">
    <div class="flex">
      <Checkbox/>
      <div class="bg-lightgreen w-[100px] h-[100px] shrink-0 ml-4">
        <img :src="'/photo/product/' + data.photos[0]" alt="" class="w-full h-full object-cover object-center">
      </div>

      <div class="ml-4">{{ data.title }}</div>
    </div>

    <div>
      <div class="text-right">{{ data.price }} ₽</div>
      <div class="flex items-center">
        <div class="p-1">-</div>
        <input type="number" class="textfield mx-4 w-[30px] text-center" v-model="count">
        <div class="p-1">+</div>
      </div>
      <div class="delete-favorite cursor-pointer" @click="">Удалить</div>
    </div>

  </div>
</template>

<style scoped>
.delete-favorite::before {
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url("~/assets/img/delete_favorite.svg");
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 5px;
}

.textfield {
  appearance: textfield;
}

</style>