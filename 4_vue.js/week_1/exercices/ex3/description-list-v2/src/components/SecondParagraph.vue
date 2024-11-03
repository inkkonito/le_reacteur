<script setup>
const props = defineProps({
  firstname: String,
  hobbies: Array,
})
</script>
<template>
  <p>
    Outside of work {{ firstname }} likes to {{ hobbies[0] }} and
    {{ hobbies[1] }}
  </p>
</template>
<style scoped></style>
