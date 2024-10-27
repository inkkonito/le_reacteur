<script setup>
import { ref } from 'vue'
let tasks = ref(['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'])

const remove = (index) => {
  console.log('Clic sur index', index)
  tasks.value = tasks.value.filter((elem, i) => i !== index)
}
</script>

<template>
  <h1>Todolist in Vue.js</h1>
  <ul>
    <li v-for="(task, index) in tasks">
      <span>Index {{ index }} : {{ task }}</span>
      <span v-if="index == tasks.length - 1">.</span>
      <span v-else-if="index == tasks.length - 2">;</span>
      <span v-else>,</span>
      <button style="margin-left: 10px" v-on:click="remove(index)">Remove</button>
    </li>
  </ul>
</template>
