<script setup>
import { ref } from 'vue'
const counter = ref(0)

const decrement = () => {
  counter.value--
}
const increment = () => {
  counter.value++
}
const reset = () => {
  counter.value = 0
}
</script>
<template>
  <h1>Counter</h1>
  <div>
    <button @click="decrement">-</button>
    {{ counter }}
    <button @click="increment">+</button>
  </div>
  <div>
    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped></style>
