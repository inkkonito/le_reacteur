<script setup>
import { ref } from 'vue'
const playersList = ref([
  {
    id: 1,
    alias: 'Alfred',
    gender: 'male',
    age: 32,
    level: 'Expert',
    numberOfWin: 2,
    actualScore: 0,
  },
  {
    id: 2,
    alias: 'Lisa',
    gender: 'female',
    age: 29,
    level: 'Intermediate',
    numberOfWin: 1,
    actualScore: 0,
  },
])
const addOne = (index) => {
  playersList.value[index].actualScore += 1
  console.log(playersList.value[index])
}
const addTwo = (index) => {
  playersList.value[index].actualScore += 2
}
const addFive = (index) => {
  playersList.value[index].actualScore += 5
  console.log(playersList.value[index])
}
const resetScore = () => {
  for (let i = 0; i < playersList.value.length; i++) {
    playersList.value[i].actualScore = 0
  }
}
</script>
<template>
  <main>
    <h1>ScoreBoard</h1>
    <div class="boards">
      <section v-for="(playersInfos, index) in playersList" :key="playersList.id">
        <h3>{{ playersInfos.alias }}</h3>
        <div>
          <p>{{ playersInfos.age }} ans</p>
          <p>Level {{ playersInfos.level }}</p>
        </div>
        <p>
          {{ playersInfos.gender === 'male' ? 'He' : 'She' }}has already
          {{ playersInfos.numberOfWin }} victor{{ playersInfos.numberOfWin > 1 ? 'ies' : 'y' }}
        </p>
        <h2>Actual score</h2>
        <p>{{ playersInfos.actualScore }}</p>
        <div>
          <button @click="addOne(index)">Add 1 point</button>
          <button @click="addTwo(index)">Add 2 points</button>
          <button @click="addFive(index)">Add 5 points</button>
        </div>
      </section>
    </div>
    <button @click="resetScore">Reset</button>
  </main>
</template>
<style scoped>
.boards {
  display: flex;
}
section,
section > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
