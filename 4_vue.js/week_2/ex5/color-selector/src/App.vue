<script setup>
import colorsList from './assets/colorsList.json'
// console.log(colorsList)
import { ref } from 'vue'

const selectedColor = ref('rgb(245, 245, 245)')

const selectColor = (color) => {
  selectedColor.value = color
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(selectedColor.value)
    alert(`${selectedColor.value} has been copied`)
  } catch (err) {
    alert('Can not copy', err)
  }
}
</script>

<template>
  <main>
    <h1>Selectionner une couleur</h1>
    <div>
      <section>
        <div v-for="subColorsList in colorsList" :key="subColorsList[0]">
          <div
            v-for="color in subColorsList"
            :key="color"
            :style="{ backgroundColor: color }"
            @click="selectColor(color)"
          ></div>
        </div>
      </section>
      <section>
        <p @click="copyToClipboard">{{ selectedColor }}</p>
        <div class="selectedColor" @click="copyToClipboard"></div>
      </section>
    </div>
  </main>
</template>

<style scoped>
section > div {
  display: flex;
}
div > div {
  border: 1px solid black;
  width: 30px;
  height: 30px;
}
h1 + div {
  display: flex;
}
.selectedColor {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  background-color: v-bind(selectedColor);
}
</style>
