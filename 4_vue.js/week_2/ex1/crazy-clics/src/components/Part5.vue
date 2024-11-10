<script setup>
// partie 5 //
const convertToCm = km => {
  alert(`${km} km  correspond à ${km * 100000} cm`)
}
</script>
<template>
  <h1>Partie 5</h1>
  <p style="text-align: center; font-size: 1.2rem; font-style: italic">
    Convertir des km en cm
  </p>
  <div class="container">
    <div class="card" @click="convertToCm(10)">10 km</div>
    <div class="card" @click="convertToCm(50)">50 km</div>
    <div class="card" @click="convertToCm(143)">143 km</div>
    <div class="card" @click="convertToCm(456)">456 km</div>
    <div class="card" @click="convertToCm(1579)">1579 km</div>
    <div class="card" @click="convertToCm(3979)">3979 km</div>
    <div class="card" @click="convertToCm(5000)">5000 km</div>
    <div class="card" @click="convertToCm(7849)">7849 km</div>
    <div class="card" @click="convertToCm(10979)">10979 km</div>
  </div>
</template>
<style scoped></style>
