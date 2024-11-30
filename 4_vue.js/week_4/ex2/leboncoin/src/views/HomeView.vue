<script setup>
import Header from '../components/Header.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

onMounted(async () => {
  try {
    const response = await axios.get(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers',
    )
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
})
</script>
<template>
  <Header />
</template>
<style scoped></style>
