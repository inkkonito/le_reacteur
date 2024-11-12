<script setup>
import colorsList from './assets/colorsList.json'
console.log(colorsList)
</script>

<template>
  <main>
    <h1>Selectionner une couleur</h1>
    <div>
      <section>
        <div v-for="colors in colorsList" :key="colors[0]">
          <div
            v-for="subColors in colors"
            :key="subColors"
            :style="{ backgroundColor: subColors }"
          ></div>
        </div>
      </section>
      <section></section>
    </div>
  </main>
</template>

<style scoped>
section > div {
  display: flex;
}
</style>
