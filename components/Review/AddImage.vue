<script setup>
import PreviewImage from "~/components/Review/PreviewImage.vue";

const emits = defineEmits([
   'pushImages'
]);

let counter = 0;
const files = ref([]);
const add_images = ref(null);

const handlerChange = ($event) => {
  files.value = [];


  let fileData = Array.from(add_images.value.files);
  for (let i = 0; i < $event.target.files.length; i++) {
    const data = {}

    const fileReader = new FileReader();
    fileReader.readAsDataURL($event.target.files[i]);
    fileReader.onload = (ev) => {
      data['src'] = ev.target.result;
      data['prop_id'] = counter;
      data['file'] = fileData[i]
      files.value.push(data);
      counter++;
    }
  }
  emits('pushImages', files);
  add_images.value.files = null;
}

const handlerDeleteImage = (prop_id) => {
  files.value = files.value.filter(item => item.prop_id !== prop_id);
  emits('pushImages', files);
}

</script>

<template>
  <div>
    <div class="flex">
      <PreviewImage
          v-for="file in files"
          :prop_id="file.prop_id"
          :src="file.src"
          class="mr-4"
          @deleteImage="handlerDeleteImage"
      />
    </div>


    <div class="w-fit my-8">
      <label for="add_file" class="w-full py-2 border px-3 cursor-pointer block">Добавить фото</label>
      <input
          type="file"
          name="add_file"
          id="add_file"
          class="hidden"
          @change="handlerChange"
          multiple
          accept="image/*"
          ref="add_images"
      >
    </div>
  </div>
</template>

<style scoped>

</style>