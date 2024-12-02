<script setup>
import { RouterView } from "vue-router";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <main class="relative m-auto min-h-[calc(100vh-190px)] mt-[120px] max-w-[1050px] pb-[40px]">
    <RouterView />
  </main>
  <Footer />
</template>
