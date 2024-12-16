<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const props = defineProps(['sort', 'priceMin', 'priceMax'])
// console.log('props>>>', props)
const priceMin = ref(props.priceMin)
const priceMax = ref(props.priceMax)
const sort = ref(props.sort)

const route = useRoute()
const router = useRouter()

const handleSubmit = () => {
  const queries = { ...route.query }
  // SI la valeur existe, elle est ajoutée aux query, SINON la clé est retirée des query
  if (priceMin.value) {
    queries.pricemin = priceMin.value
  } else {
    delete queries.pricemin
  }

  if (priceMax.value) {
    queries.pricemax = priceMax.value
  } else {
    delete queries.pricemax
  }

  if (sort.value) {
    queries.sort = sort.value
  } else {
    delete queries.sort
  }

  // Pour toujours commencer à la première page de la recherche
  queries.page = 1

  // On navigue vers la route actuelle avec les query mises à jour
  router.push({ name: 'home', query: queries })
}
</script>
<template>
  <form class="my-[40px] flex justify-between gap-[50px]" @submit.prevent="handleSubmit">
    <div class="flex gap-[40px]">
      <!-- Price Min / Max -->
      <div>
        <p class="mb-[10px] font-bold">Prix</p>
        <div class="flex gap-[20px]">
          <div class="flex">
            <input
              class="h-[43px] w-[150px] rounded-bl-[15px] rounded-tl-[15px] border-[1px] border-solid border-lbc_grey pl-[15px]"
              type="number"
              name="priceMin"
              id="priceMin"
              placeholder="Minimum"
              min="0"
              v-model="priceMin"
            />
            <label
              class="flex h-[43px] w-[45px] items-center justify-center rounded-br-[15px] rounded-tr-[15px] border-[1px] border-l-0 border-solid border-lbc_grey text-[14px]"
              for="priceMin"
            >
              €
            </label>
          </div>
          <div class="flex">
            <input
              class="h-[43px] w-[150px] rounded-bl-[15px] rounded-tl-[15px] border-[1px] border-solid border-lbc_grey pl-[15px]"
              type="number"
              name="priceMax"
              id="priceMax"
              placeholder="Maximum"
              :min="priceMin"
              v-model="priceMax"
            />
            <label
              class="flex h-[43px] w-[45px] items-center justify-center rounded-br-[15px] rounded-tr-[15px] border-[1px] border-l-0 border-solid border-lbc_grey"
              for="priceMax"
            >
              €
            </label>
          </div>
        </div>
      </div>
      <!-- Sort part -->
      <div class="flex flex-col">
        <p class="mb-[10px] font-bold">Tri</p>
        <div class="flex flex-1 items-center">
          <label class="mr-[15px]">
            Prix croissants
            <input type="radio" value="price:asc" id="priceAsc" />
          </label>
          <label class="mr-[15px]">
            Prix décroissants
            <input type="radio" value="price:desc" id="priceDesc" />
          </label>
          <label class="mr-[15px]">
            Pas de tri
            <input type="radio" value="" id="noSort" v-model="sort" />
          </label>
        </div>
      </div>
    </div>
    <button class="cursor-pointer self-center rounded-[10px] border-none bg-lbc_orange p-[10px] text-[14px] font-bold text-white">
      Rechercher
    </button>
  </form>
</template>
