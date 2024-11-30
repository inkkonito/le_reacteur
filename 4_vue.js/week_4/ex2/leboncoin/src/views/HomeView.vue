<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import TimeToSell from "../components/TimeToSell.vue";

const offersList = ref({});
onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers",
    );
    offersList.value = data;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <Header />
  <main class="m-auto max-w-[1050px]">
    <div>
      <!--  Wait for offers loading -->
      <p v-if="offersList.length === 0" class="">En cours de chargement...</p>

      <!-- Headline -->
      <div v-else>
        <p class="my-4 text-center text-xl font-bold">
          Des millions de petites annonces et autant d’occasions de se faire
          plaisir
        </p>
      </div>

      <TimeToSell />
    </div>
  </main>
  <Footer />
</template>
<style scoped></style>
