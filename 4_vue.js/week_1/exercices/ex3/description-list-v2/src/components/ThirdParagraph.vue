<script setup>
const props = defineProps({
  gender: String,
  pet: Object,
})
</script>
<template>
  <p>
    At home {{ gender === 'female' ? 'her' : 'his' }} lively companion is
    {{ pet.name }} a {{ pet.age }} years old {{ pet.species }}.
  </p>
</template>
<style scoped></style>
