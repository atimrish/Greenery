<script setup>

const props = defineProps({
  isAdded: {
    type: Boolean,
    default: false
  },
  prop_id:{
    type: Number,
    required: true
  },
  ch_name: {
    type: String,
    default: ''
  },
  ch_value: {
    type: String,
    default: ''
  }
});

const emits = defineEmits([
    'createChar',
    'deleteChar'
]);

const char_name = ref(props.ch_name);
const char_value = ref(props.ch_value);

const handleCreate = () => {
  const data = {
    char_name: char_name.value,
    char_value: char_value.value
  };
  emits("createChar", data);
  char_name.value = '';
  char_value.value = '';
}

</script>

<template>
  <div class="flex">
    <input
        type="text"
        class="border border-r-0 p-2"
        placeholder="Название характеристики"
        v-model="char_name"
        :class="{'pointer-events-none': isAdded}"
    >

    <input
        type="text"
        class="p-2 border"
        placeholder="Значение"
        v-model="char_value"
        :class="{'pointer-events-none': isAdded}"
    >

    <Button
        v-if="isAdded"
        class="text-center ml-4 text-black py-3 px-4"
        @click="emits('deleteChar', prop_id)"
    >Удалить</Button>

    <Button
        v-else
        class="text-center
        ml-4 bg-yellow
        text-white py-3 px-4"
        @click="handleCreate"
    >Добавить</Button>

  </div>
</template>

<style scoped>


</style>