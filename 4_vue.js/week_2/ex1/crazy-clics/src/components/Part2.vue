<script setup>
// -- partie 2 --
const displayName = () => {
  console.log("Je m'appelle Julien")
}
const displayName2 = name => {
  alert(`Je m'appelle ${name}`)
}
</script>
<template>
  <section>
    <h1>Partie 2</h1>
    <div style="text-align: center">
      <button @click="displayName()">Comment t'appelles-tu ?</button>
      <button @click="displayName2('Julien')">Comment t'appelles-tu ?</button>
    </div>
  </section>
</template>
<style scoped></style>
