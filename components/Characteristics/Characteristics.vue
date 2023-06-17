<script setup>
import CharacteristicItem from "~/components/Characteristics/CharacteristicItem.vue";

let counter = 1;
const characts = ref([]);

const emits = defineEmits(['pushUp']);

const handleCreateChar = (data) => {
  data.prop_id = counter++;
  characts.value.push(data);
  emits('pushUp', characts)
}

const handleDeleteChar = (id) => {
  characts.value = characts.value.filter(item => item.prop_id !== id);
  emits('pushUp', characts)
}

</script>

<template>
  <div>
    <CharacteristicItem
        v-for="ch in characts"
        :prop_id="ch.prop_id"
        :is-added="true"
        :ch_name="ch.char_name"
        :ch_value="ch.char_value"
        @deleteChar="handleDeleteChar"
    />
    <CharacteristicItem
        :prop_id="0"
        :is-added="false"
        @createChar="handleCreateChar"
    />
  </div>
</template>

<style scoped>

</style>