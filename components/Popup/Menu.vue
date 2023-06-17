<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <teleport to="body">
    <transition name="menu">
      <div class="absolute xl:left-[90px] top-0 w-[1200px] h-[627px] bg-white z-20 flex transition-all shadow-2xl" v-if="isOpen">
        <div class="h-full w-[400px] bg-darkgreen"></div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>

.menu-enter-from,
.menu-leave-to
{
  transition: all 0.3s ease;
  top: -620px;
}

.menu-enter-active,
.menu-leave-active
{
  transition: all 0.3s ease;
  top: -620px;
}


.menu-enter-to,
.menu-leave-from
{
  transition: all 0.3s ease;
  top: 0;
}

</style>