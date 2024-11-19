<template>

  <div>
    <p v-if="walletValue === 0">Mon porte-monnaie est vide</p>
    <p v-else-if="walletValue === 1">Mon premier euros !</p>
    <p v-else-if="walletValue > 50">Ca y est je suis riche!!</p>
    <p v-else-if="walletValue > 10">Yes, plus de 10€</p>
    <p>{{ walletValue }}€</p>
  </div>

  <button @click="addEuros(1)">Ajouter 1€</button>
  <button @click="addEuros(5)">Ajouter 5€</button>
</template>

<script setup>
import {ref} from 'vue'
const walletValue = ref(0);

const addEuros = (value) => {
  walletValue.value += value
}

</script>
