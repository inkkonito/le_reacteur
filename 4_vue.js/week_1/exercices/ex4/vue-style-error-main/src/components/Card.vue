<script setup>
import Details from '../components/Details.vue'
// Déclaration de la props qui contient les informations d'un animal
const props = defineProps({
  animalInfos: Object
})
</script>

<template>
  <div class="card" :class="{ opacity: animalInfos.alreadyAdopted }">
    <Details :animalInfos="animalInfos" />

    <p class="description">{{ animalInfos.description }}</p>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--bgc);
  padding: 15px;
  border-radius: 5px;
  width: calc((100% - 15px) / 2);
  display: flex;
  gap: 10px;
  box-shadow: 0px 0px 7px var(--shadow-color);
  display: flex;
  flex-direction: row;
}
.card > div {
  width: 150px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 10px;
}
.description {
  flex: 1;
}
p span {
  text-decoration: underline;
  color: gray;
}
.card p {
  color: var(--txt-color);
}

.opacity {
  opacity: 0.3;
}

@media (max-width: 900px) {
  .card {
    width: 100%;
  }
}
@media (max-width: 500px) {
  .card {
    flex-direction: column;
  }
}
</style>
