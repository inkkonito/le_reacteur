<script setup>
const props = defineProps({
  firstname: String,
  lastname: String,
  gender: String,
})
</script>
<template>
  <h2
    :class="{
      isFemale: gender === 'female',
    }"
  >
    {{ firstname }} {{ lastname }}
  </h2>
</template>
<style scoped>
.isFemale {
  color: orange;
}
</style>
