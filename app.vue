<script setup>
import Header from "~/components/Header/Header.vue";
import Footer from "~/components/Footer/Footer.vue";
</script>

<template>
  <div>
    <Header/>
    <main>
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped>

</style>