<script setup>
const props = defineProps({
  firstname: String,
  lastname: String,
})
</script>
<template>
  <h2>{{ firstname }} {{ lastname }}</h2>
</template>
<style scoped></style>
