<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const props = defineProps({
  id: { required: true },
})
const userInfos = ref(null)
onMounted(async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}`)
    console.log(response.data)
    userInfos.value = response.data
  } catch (error) {
    console.log('Error fetching user details', error)
  }
})
</script>
<template>
  <h1>UserView Component</h1>
  <p v-if="!userInfos">En cours de chargement</p>
  <div v-else>
    <h2>{{ userInfos.name }}</h2>
    <p>{{ userInfos.email }}</p>
    <p>{{ userInfos.phone }}</p>
  </div>
</template>
<style scoped></style>
