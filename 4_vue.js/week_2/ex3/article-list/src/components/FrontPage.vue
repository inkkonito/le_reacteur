<script setup>
const props = defineProps({ infos: Object })
// console.log(props.infos)
</script>

<template>
  <div v-bind:style="{ backgroundImage: `url(${infos.image})` }" class="container">
    <div>
      <h3>
        <span> {{ infos.category.toUpperCase() }}</span>
        <span> {{ infos.subCategory.toUpperCase() }}</span>
      </h3>
      <h1>
        <span>{{ infos.title }}</span>
      </h1>
    </div>
    <p>{{ infos.teaser }}</p>
  </div>
</template>

<style scoped>
.container {
  height: 550px;
  background-repeat: no-repeat;
  background-position: bottom;
  padding: 90px;
}
.container > div {
  position: relative;
}
.container > div::before {
  content: '';
  position: absolute;
  top: 0px;
  left: -5px;
  width: 5px;
  height: 100%;
  background: linear-gradient(45deg, #be80ff, #6325ff);
}
h1 {
  font-family: Merryweather, sans-serif;
  color: white;
  font-size: 32px;
  width: 750px;
  font-weight: bold;
  margin-bottom: 50px;
}
h1 span {
  background-color: black;
  pading: 5px;
}
h3 {
  font-size: 12px;
  line-height: 24px;
  color: white;
  background-color: black;
  display: inline;
  padding: 5px 0;
}
h3 span:first-child {
  background: linear-gradient(45deg, #be80ff, #6325ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.7px;
}
h3 span:last-child {
  padding: 0 5px;
  letter-spacing: 0.3px;
}
p {
  color: white;
  font-weight: 300;
  line-height: 22px;
  width: 800px;
  font-size: 13px;
  background-color: black;
  opacity: 0.8;
  padding: 25px;
}
</style>
