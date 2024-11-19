<template>
  <button @click="toLogout" v-if="isLogged">Se déconnecter</button>
  <button @click="toRegister" v-if="!isLogged">S'inscrire</button>
  <button @click="toLogin" v-if="!isLogged">Se connecter</button>
</template>

<script setup>
import { ref } from 'vue'
const isLogged = ref(false)

const toLogin = () => {
  isLogged.value = true
}
const toRegister = () => {
  isLogged.value = true
}

const toLogout = () => {
  isLogged.value = false
}
</script>
