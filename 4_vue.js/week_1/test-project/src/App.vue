<template>
  <p v-bind:id="`p-${count}`" v-show="count > 0">
    <span :style="{ color: count > 8 ? 'red' : 'blue' }">Compteur :</span>
    <span :class="{ active: count < 3 }">{{ count }}</span>
  </p>
  <div v-if="count >= 5">Bravo vous avez cliqué plus de 5 fois</div>
  <div v-else>Maintenant vous êtes à moins que 5</div>
  <div v-show="count <= 0">J'existe car le compteur est à zéro ou négatif</div>
  <button
    v-on:click="increment"
    :style="
      timer > 5 ? { background: 'black', color: 'white' } : { background: 'red', color: 'blue' }
    "
  >
    Incrémenter
  </button>
  <button v-on:click="decrement">Décrémenter</button>
  <div v-show="count <= 0">Et pouf le compteur à disparu! Surprise</div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
const timer = ref(0)
setInterval(() => {
  timer.value++
  console.log(timer.value)
}, 1000)
</script>

<style scoped>
.active {
  background-color: black;
  color: white;
}
</style>
