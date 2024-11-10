<script setup></script>
<template>
  <h1>Partie 1</h1>
  <div style="text-align: center">
    <button v-on:click="console.log('Hello World')">
      Affiche un message dans la console
    </button>
    <button @click="console.log('Bienvenue au reacteur!')">
      Affiche un autre message dans la console
    </button>
  </div>
</template>
<style scoped></style>
