<script setup>
// partie 3 //
const colors = {
  bleue: '#23b8d3',
  violette: '#a519a5',
  orange: '#ffa500',
  verte: '#44f178',
}
const displayColor = color => {
  console.log(
    `Il s'agit de la couleur ${color} dont le code hexadécimal ${colors[color]}`,
  )
}
</script>
<template>
  <h1>Partie 3</h1>
  <h2 style="text-align: center">De quelle couleur s'agit-il ?</h2>

  <div style="display: flex">
    <div
      v-bind:style="{
        backgroundColor: colors.bleue,
        width: '100px',
        height: '100px',
        borderRadius: '5px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
      v-on:click="displayColor('bleue')"
    >
      Cliquez
    </div>
    <div
      v-bind:style="{
        backgroundColor: colors.violette,
        width: '100px',
        height: '100px',
        borderRadius: '5px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
      v-on:click="displayColor('violette')"
    >
      Cliquez
    </div>
    <div
      v-bind:style="{
        backgroundColor: colors.orange,
        width: '100px',
        height: '100px',
        borderRadius: '5px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
      v-on:click="displayColor('orange')"
    >
      Cliquez
    </div>
    <div
      v-bind:style="{
        backgroundColor: colors.verte,
        width: '100px',
        height: '100px',
        borderRadius: '5px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
      v-on:click="displayColor('verte')"
    >
      Cliquez
    </div>
  </div>
</template>
<style scoped></style>
