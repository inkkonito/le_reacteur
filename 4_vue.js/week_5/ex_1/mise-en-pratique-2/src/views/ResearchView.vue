<script setup>
import { personsList } from '../assets/data.js'
import { ref } from 'vue'

const firstname = ref('')
const result = ref(null)
const handleSubmit = () => {
  const personFound = personsList.find((person) => {
    return (
      person.firstname.toLowerCase() === firstname.value.toLowerCase() ||
      person.lastname.toLowerCase() === firstname.value.toLowerCase()
    )
  })
  result.value = personFound
}
</script>
<template>
  <div>
    <h1>Search by name</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="firstname" id="firstname" placeholder="Toto" />
      <button>Search</button>
    </form>
  </div>

  <div>
    <h3 v-if="result === null">Enter a firstname</h3>
    <h3 v-else-if="result === undefined">This name does not exist in the list, sorry!!</h3>
    <div v-else>
      <h2>Found it!!!</h2>
      <div>
        <p>{{ result.firstname }} {{ result.lastname }}</p>
        <p>{{ result.age }} ans</p>
        <p>{{ result.job }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
