<script setup>
import Header from './components/Header.vue'
import FrontPage from './components/FrontPage.vue'
import ArticleCard from './components/ArticleCard.vue'
import Footer from './components/Footer.vue'
import data from './assets/data/articles.json'
console.log(data.articlesList)
</script>

<template>
  <Header />
  <main>
    <FrontPage :infos="data.frontPage" />
    <div class="container articles-list">
      <ArticleCard
        v-for="articleInfos in data.articlesList"
        :key="articleInfos.id"
        :articleInfos="articleInfos"
      />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
main {
  padding: 50px 0;
}
.articles-list {
  /* border: solid red 1px; */
  padding: 50px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
