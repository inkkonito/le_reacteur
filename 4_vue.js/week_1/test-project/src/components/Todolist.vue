<script setup>
import { ref } from 'vue'
let tasks = ref([
  { text: 'Element 1', modifyOn: false },
  { text: 'Element 2', modifyOn: false },
  { text: 'Element 3', modifyOn: false },
  { text: 'Element 4', modifyOn: false },
  { text: 'Element 5', modifyOn: false }
])

const remove = (index) => {
  console.log('Clic sur index', index)
  tasks.value = tasks.value.filter((elem, i) => i !== index)
}

const modify = (index) => {
  tasks.value[index].modifyOn = true
}

const valid = (index, event) => {
  tasks.value[index].text = event.target.value
  tasks.value[index].modifyOn = false
}
</script>

<template>
  <h1>Todolist in <span class="bold">Vue.js</span></h1>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span v-if="!task.modifyOn" v-on:dblclick="modify(index)">{{ task.text }}</span>
      <input type="text" v-else v-bind:value="task.text" v-on:keyup.enter="valid(index, $event)" />
      <button style="margin-left: 10px" v-on:click="remove(index)">Remove</button>
    </li>
  </ul>
  <div v-if="tasks.length == 0">The list is empty.</div>
</template>

<style scoped>
.bold {
  font-weight: bold;
}
</style>
