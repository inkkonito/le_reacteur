<script setup>
const word1 = 'aLigaTOR'
const word2 = 'CHAMOIS'
const word3 = 'ElEpHaNt'
const word4 = 'wombaT'

// Function to capitalize the first letter and make the rest lowercase
const correctTheWord = word => {
  let str = ''

  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      str = str + word[i].toUpperCase()
    } else {
      str = str + word[i].toLowerCase()
    }
  }
  alert(str)
}
</script>

<template>
  <div>
    <button v-on:click="correctTheWord(word1)">
      {{ word1 }}
    </button>
    <button v-on:click="correctTheWord(word2)">
      {{ word2 }}
    </button>
    <button v-on:click="correctTheWord(word3)">
      {{ word3 }}
    </button>
    <button v-on:click="correctTheWord(word4)">
      {{ word4 }}
    </button>
  </div>
</template>

<style scoped>
div {
  margin-top: 20px;
}
li {
  list-style-type: none;
}
</style>
