<script setup>
import CardDescription from './components/CardDescription.vue'

const personsList = [
  {
    gender: 'female',
    firstname: 'Emily',
    lastname: 'Parker',
    age: 24,
    job: 'teacher',
    hobbies: ['read books', 'go hiking'],
    pet: {
      name: 'Whiskers',
      age: 2,
      species: 'ferret',
    },
    favoriteColor: 'red',
  },
  {
    gender: 'male',
    firstname: 'Marcus',
    lastname: 'Bennett',
    age: 38,
    job: 'architect',
    hobbies: ['watch bird', 'play chess'],
    pet: {
      name: 'Nala',
      age: 6,
      species: 'dog',
    },
    favoriteColor: 'blue',
  },
  {
    gender: 'female',
    firstname: 'Sophia',
    lastname: 'Rodriguez',
    age: 31,
    job: 'environmental scientist',
    hobbies: ['play guitar', 'bake cakes'],
    pet: {
      name: 'Paws',
      age: 3,
      species: 'cat',
    },
    favoriteColor: 'orange',
  },
  {
    gender: 'male',
    firstname: 'Oliver',
    lastname: 'Hughes',
    age: 56,
    job: 'carpenter',
    hobbies: ['paint', 'ride horses'],
    pet: {
      name: 'Bubble',
      age: 4,
      species: 'snake',
    },
    favoriteColor: 'purple',
  },
]
</script>
<template>
  <main>
    <h1>Description List</h1>
    <div>
      <CardDescription v-bind:personInfos="personsList[0]" />
      <CardDescription v-bind:personInfos="personsList[1]" />
      <CardDescription v-bind:personInfos="personsList[2]" />
      <CardDescription v-bind:personInfos="personsList[3]" />
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #c9e1c2;
  padding: 50px;
  min-height: 100vh;
}
main > div {
  display: flex;
  gap: 20px;
}

/* media queries  */

@media (max-width: 1250px) {
  /* main {
    background-color: red;
  } */
  main > div {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
