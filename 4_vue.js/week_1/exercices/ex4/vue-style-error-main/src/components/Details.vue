<script setup>
const props = defineProps({ animalInfos: Object })
</script>
<template>
  <div>
    <h2>{{ animalInfos.name }}</h2>
    <p><span>Espèce</span> : {{ animalInfos.species }}</p>
    <p><span>Age</span> : {{ animalInfos.age }}</p>
  </div>
</template>
