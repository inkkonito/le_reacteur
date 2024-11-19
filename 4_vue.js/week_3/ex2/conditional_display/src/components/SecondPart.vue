<template>
  <p v-if="!isClicked" @click="changeLike">Like Icon</p>
  <p v-if="isClicked" @click="changeLike">Dislike Icon</p>
</template>

<script setup>
import { ref } from 'vue'
const isClicked = ref(false)
const changeLike = () => {
isClicked.value = !isClicked.value
}
</script>

<style scoped>
p {
  text-decoration: underline  ;
}</style>
