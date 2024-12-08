<script setup>
import { ref } from 'vue'

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const status = ref('adult')

const waitingList = ref([])

const handleSubmit = () => {
  const newPerson = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    status: status.value,
  }
  waitingList.value.push(newPerson)
  console.log(waitingList.value)
}
</script>
<template>
  <main>
    <div>
      <form @submit.prevent="handleSubmit">
        <label for="firstname">Firstname: </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Patxi"
          v-model="firstname"
        /><br />

        <label for="lastname">Lastname:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Basco"
          v-model="lastname"
        /><br />

        <label for="email">Email:</label>
        <input type="text" name="email" id="email" placeholder="jon@doe.co" v-model="email" /><br />

        <label for="adult">Adult</label>
        <input type="radio" value="adult" v-model="status" /><br />

        <label for="minor">Minor</label>
        <input type="radio" value="minor" v-model="status" /><br />
        <button>Validate</button>
      </form>
    </div>
    <p v-if="waitingList.length === 0">Nobody on the list, yet!!!</p>
    <div v-for="person in waitingList" :key="person.email" v-else>
      <p>Name : {{ person.firstname }} {{ person.lastname }}</p>
      <p>Email: {{ person.email }}</p>
      <p>Is {{ person.status }}</p>
    </div>
  </main>
</template>
<style scoped></style>
