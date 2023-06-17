<script setup>
const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 10
  }
});

const minValue = ref(0);
const minPercent = ref(0);

const maxValue = ref(0);
const maxPercent = ref(0);



const setMinPercent = () => {
  const v = Math.min(minValue.value, maxValue.value);
  minValue.value = v > props.min ? v - 1 : v;
  minPercent.value = minValue.value / props.max * 100;
}

const setMaxPercent = () => {
  const v = Math.max(minValue.value, maxValue.value);
  maxValue.value = v < props.max ? v + 1 : v;
  maxPercent.value = maxValue.value / props.max * 100;
}


</script>

<template>
  <div>

    <div class="flex items-center">
      <input
          type="number"
          class="border w-[35%] text-center"
          v-model="minValue"
      >
      <div class="w-[30%] border" />
      <input
          type="number"
          class="border w-[35%] text-center"
          v-model="maxValue"
      >
    </div>

    <div class="my-4 relative">
      <input
          type="range"
          :min="min"
          :max="max"
          v-model="minValue"
          @input="setMinPercent"
          class="w-full pointer-events-none absolute appearance-none opacity-0 z-50"
      >
      <div
          class="h-1 bg-[#fff] absolute z-10 top-1"
          :style="{width: minPercent + '%'}"
      />
      <div
          class="h-[20px] w-[20px] bg-[#fff] top-[-4px] absolute rounded-full border-2 z-20"
          :style="{
            transform: `translate(-${minPercent / 4.7}px)`,
            left: minPercent + '%'
          }"
      />

      <input
          type="range"
          :min="min"
          :max="max"
          v-model="maxValue"
          @input="setMaxPercent"
          class="w-full pointer-events-none absolute appearance-none z-50 opacity-0"
      >
      <div
          class="h-1 bg-black absolute top-1"
          :style="{
            width: maxPercent + '%'
          }"
      />
      <div
          class="h-[20px] w-[20px] bg-[#fff] top-[-4px] absolute rounded-full border-2"
          :style="{
            transform: `translate(-${maxPercent / 4.7}px)`,
            left: maxPercent + '%'
          }"
      />

    </div>


  </div>
</template>

<style scoped>

input[type="range"]::-moz-range-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
}

input[type="number"] {
  appearance: textfield;
}


</style>