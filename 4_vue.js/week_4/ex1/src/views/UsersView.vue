<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const usersList = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log('HomeView - data => ', response.data)
    usersList.value = response.data
  } catch (error) {
    console.log('HomeView - catch =>', error)
  }
})
</script>

<template>
  <main>
    <h1>User View</h1>
    <p v-if="usersList.length === 0">En cours de chargement...</p>
    <div v-else>
      <RouterLink
        v-for="user in usersList"
        :key="user.id"
        :to="{ name: 'user', params: { id: user.id } }"
        ><p>{{ user.name }}</p></RouterLink
      >
    </div>
  </main>
</template>
