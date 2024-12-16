<script setup>
// import components
import TimeToSell from '../components/TimeToSell.vue'
import OfferCard from '../components/OfferCard.vue'
import Filters from '@/components/Filters.vue'
import Pagination from '@/components/Pagination.vue'

// import libs
import axios from 'axios'
import { onMounted, ref, watchEffect } from 'vue'

// init reactive variable to store offers
const offersList = ref({})

// props
const props = defineProps(['page', 'title', 'sort', 'priceMin', 'priceMax'])
// console.log(props)
// trigger get offers onMouted event
onMounted(async () => {
  watchEffect(async () => {
    try {
      // Les filtres des prix ne peuvent pas être sans valeur sinon la requête crash. Donc on créé une string vide qui stockera le filtre prix minimum et prix maximum seulement s'ils sont demandés
      let pricefilters = ''

      if (props.pricemax) {
        pricefilters += `&filters[price][$lte]=${props.pricemax}`
      }
      if (props.pricemin) {
        pricefilters += `&filters[price][$gte]=${props.pricemin}`
      }

      const { data } = await axios.get(
        `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar&filters[title][$containsi]=${props.title}${pricefilters}&pagination[page]=${props.page}&pagination[pageSize]=10&sort=${props.sort}`,
      )

      // Pour vérifer les informations reçues
      console.log('HomeView - data >>>', data)

      offersList.value = data
    } catch (error) {
      // Affiche l'erreur dans la console du navigateur
      console.log('HomeView - catch >>>', error)
    }
  })
})
</script>
<template>
  <div>
    <div>
      <!--  Wait for offers loading -->
      <p v-if="offersList.length === 0" class="">En cours de chargement...</p>

      <!-- Conditional Headline -->
      <div v-else>
        <!-- Filters  -->
        <Filters :sort="sort" :priceMin="priceMin" :priceMax="priceMax" />
        <p class="my-4 text-center text-2xl font-bold">Des millions de petites annonces et autant d’occasions de se faire plaisir</p>
      </div>

      <!-- Importing Call to action component -->
      <TimeToSell />

      <!-- Display all offers -->
      <div class="flex w-full flex-wrap justify-center gap-x-[15px] gap-y-[40px]">
        <!-- Send props to OfferCards and loop -->
        <OfferCard
          v-for="offer in offersList.data"
          :key="offer.id"
          :offerInfos="offer.attributes"
          :id="offer.id"
          class="h-[380px] w-[calc((100%-60px)/5)]"
        ></OfferCard>
      </div>
    </div>
    <Pagination />
  </div>
</template>
<style scoped></style>
