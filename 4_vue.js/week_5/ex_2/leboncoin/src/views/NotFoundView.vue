<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="mt-40 flex items-center justify-center text-lg">
    Error 404, page introuvable, retourner à l'accueil&nbsp;
    <RouterLink class="font-bold underline" :to="{ name: 'home' }">en cliquant ici</RouterLink>
  </div>
</template>
<style scoped></style>
