<script setup>
import { ref } from 'vue'
import { inject } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const Store = inject('GlobalStore')

const firstname = ref(Store.userInfos.value.firstname)
const lastname = ref(Store.userInfos.value.lastname)
const job = ref(Store.userInfos.value.job)
const age = ref(Store.userInfos.value.age)

const handleSubmit = () => {
  const newInfos = {
    firstname: firstname.value,
    lastname: lastname.value,
    age: age.value,
    job: job.value,
  }
  console.log(newInfos)
  Store.editUserInfos(newInfos)
  router.push({ name: 'profile' })
}
</script>
<template>
  <h1>Edit your profile</h1>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="firstname">Firstname:</label>
      <input type="text" id="firstname" v-model="firstname" placeholder="Firstname" /><br />
      <label for="lastname">Lastname:</label>
      <input type="text" id="lastname" v-model="lastname" placeholder="Toto" /><br />
      <label for="job">Job:</label>
      <input type="text" id="job" v-model="job" placeholder="Toto" /><br />
      <label for="age">Age:</label>
      <input type="number" id="age" v-model="age" placeholder="Toto" /><br />
      <button>Modifier</button>
    </form>
  </div>
</template>
<style scoped></style>
