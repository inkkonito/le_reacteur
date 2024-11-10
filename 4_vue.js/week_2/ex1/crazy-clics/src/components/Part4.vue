<script setup>
// partie 4 //
const randomNum = () => {
  const RandonNumber = Math.floor(Math.random() * 100)
  alert(RandonNumber)
}
</script>
<template>
  <h1>Partie 4</h1>
  <div class="circle" v-on:click="randomNum()">Chiffre surprise</div>
</template>
<style scoped></style>
