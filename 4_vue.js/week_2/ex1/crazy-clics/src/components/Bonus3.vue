<script setup>
const colorsList = [
  { name: 'bleu', hexa: '#0B71BA' },
  { name: 'vert', hexa: '#39B639' },
  { name: 'orange', hexa: '#EA8512' },
  { name: 'violet', hexa: '#721D7D' },
  { name: 'marron', hexa: '#713928' },
  { name: 'jaune', hexa: '#DED94B' },
  { name: 'noir', hexa: '#1C1C18' },
  { name: 'rouge', hexa: '#F11919' },
  { name: 'gris', hexa: '#9C9696' },
]
const randomColorBis = () => {
  const randomIndex = Math.floor(Math.random() * 10)
  alert(
    `Vous obtenez du ${colorsList[randomIndex].name} dont le code hexadécimal est '${colorsList[randomIndex].hexa}'`,
  )
}
</script>
<template>
  <h1>Bonus 3</h1>
  <button @click="randomColorBis">Couleur surprise version bis</button>
</template>
<style scoped></style>
