<script setup></script>

<template>
  <header>
    <img src="../assets/logo-futura-dark.svg" alt="" />
    <nav>
      <p>SCIENCE <font-awesome-icon :icon="['fas', 'angle-down']" /></p>
      <p>SANTE <font-awesome-icon :icon="['fas', 'angle-down']" /></p>
      <p>TECH <font-awesome-icon :icon="['fas', 'angle-down']" /></p>
      <p>MAISON <font-awesome-icon :icon="['fas', 'angle-down']" /></p>
      <p>PLANETE <font-awesome-icon :icon="['fas', 'angle-down']" /></p>
    </nav>
    <button>JE M'ABONNE</button>
  </header>
</template>

<style scoped>
header {
  background-color: pink;
  display: flex;
  background: linear-gradient(45deg, #be80ff, #6325ff);
  height: 60px;
  padding: 10px 80px;
  justify-content: space-between;
  align-items: center;
}
nav {
  display: flex;
  gap: 25px;
  color: white;
}
p {
  display: flex;
  gap: 5px;
}
button {
  color: white;
  background-color: #fdb00f;
  padding: 7px 15px;
  border: none;
}
</style>
