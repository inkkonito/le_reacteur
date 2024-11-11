<script setup>
const props = defineProps({ articleInfos: Object })
const categoriesColors = {
  sciences: ['#be80ff', '#6325ff'],
  sante: ['#ff6b9f', '#ff4e52'],
  planete: ['#9fcb5c', '#069849'],
  maison: ['#fa9761', '#ff5957'],
  tech: ['#49adfa', '#2a3df7'],
}
</script>

<template>
  <div>
    <img :src="articleInfos.image" alt="" />
    <p>
      <span>{{ articleInfos.category.toUpperCase() }}</span>
      <span>{{ articleInfos.subCategory.toUpperCase() }}</span>
    </p>
    <h2>{{ articleInfos.title }}</h2>
    <p class="date">{{ articleInfos.date }}</p>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
}
div {
  /* border: 1px solid blue; */
  width: calc((100% - 90px) / 4);
  height: 480px;
}
span {
  font-size: 12px;
}
span:first-child {
  font-weight: bold;
  background: linear-gradient(
    45deg,
    v-bind('categoriesColors[articleInfos.category][0]'),
    v-bind('categoriesColors[articleInfos.category][1]')
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.7px;
}
span:last-child {
  letter-spacing: 0.3px;
  font-weight: 300;
}
h2 {
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  font-family: Merryweather, serif;
}
.date {
  font-weight: 300px;
  font-size: 12px;
  color: grey;
}
</style>
