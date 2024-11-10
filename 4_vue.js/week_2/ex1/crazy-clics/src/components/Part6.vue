<script setup>
const displayNetwork = network => {
  alert(`Il s'agit du reseau ${network}`)
}
</script>
<template>
  <h1>Partie 6</h1>
  <div style="margin: 0 auto">
    <font-awesome-icon
      :icon="['fab', 'github']"
      size="2x"
      @click="displayNetwork('github')"
    />
    <font-awesome-icon
      :icon="['fab', 'linkedin']"
      size="2x"
      @click="displayNetwork('linkedin')"
    />
    <font-awesome-icon
      :icon="['fab', 'instagram']"
      size="2x"
      @click="displayNetwork('instagram')"
    />
  </div>
</template>
<style scoped></style>
