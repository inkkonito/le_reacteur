<script setup>
// import components
import TimeToSell from "../components/TimeToSell.vue";
import OfferCard from "../components/OfferCard.vue";

// import libs
import axios from "axios";
import { onMounted, ref } from "vue";

// init reactive variable to store offers
const offersList = ref({});

// trigger get offers onMouted event
onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar",
    );
    offersList.value = data;
    // console.log(offersList.value.data);
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div>
    <div>
      <!--  Wait for offers loading -->
      <p v-if="offersList.length === 0" class="">En cours de chargement...</p>

      <!-- Conditional Headline -->
      <div v-else>
        <p class="my-4 text-center text-2xl font-bold">
          Des millions de petites annonces et autant d’occasions de se faire
          plaisir
        </p>
      </div>

      <!-- Importing Call to action component -->
      <TimeToSell />

      <!-- Display all offers -->
      <div
        class="flex w-full flex-wrap justify-center gap-x-[15px] gap-y-[40px]"
      >
        <!-- Send props to OfferCards and loop -->
        <OfferCard
          v-for="offer in offersList.data"
          :key="offer.id"
          :offerInfos="offer.attributes"
          :id="offer.id"
          class="h-[380px] w-[calc((100%-60px)/5)]"
        >
        </OfferCard>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
