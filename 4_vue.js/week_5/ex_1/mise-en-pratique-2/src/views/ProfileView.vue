<script setup>
import { RouterLink } from 'vue-router'
import { inject } from 'vue'
const Store = inject('GlobalStore')
</script>
<template>
  <h1>Your Profile</h1>

  <div>
    <p><span>Firstname</span> : {{ Store.userInfos.value.firstname }}</p>
    <p><span>Lastname</span> : {{ Store.userInfos.value.lastname }}</p>
    <p><span>Age</span> : {{ Store.userInfos.value.age }}</p>
    <p><span>Job</span> : {{ Store.userInfos.value.job }}</p>
  </div>

  <RouterLink :to="{ name: 'edit' }"><p>Edit Profile</p></RouterLink>
</template>
<style scoped></style>
