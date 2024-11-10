<script setup>
const colorsList = [
  'bleu',
  'vert',
  'rose',
  'orange',
  'violet',
  'marron',
  'jaune',
  'noir',
  'rouge',
  'gris',
]

const randomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorsList.length)
  alert(colorsList[randomIndex])
}
</script>
<template>
  <h1>Partie 7</h1>
  <button @click="randomColor">Couleur Surprise</button>
</template>

<style scoped></style>
