<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'research' }">Research</RouterLink>
      <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
      <RouterLink :to="{ name: 'edit' }">Edit</RouterLink>
    </nav>
  </header>
</template>
<style scoped></style>
