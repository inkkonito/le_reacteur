<script setup>
// import libs
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'
import { useCycleList } from '@vueuse/core'
import { formatPrice } from '../utils/formatPrice.js'

const props = defineProps({
  id: {
    required: true,
  },
})
const offerInfos = ref({})

// 'offerInfos' est un objet vide dans un premier temps, puis il reçoit sa nouvelle valeur. On utilise 'computed' pour détecter ce changement et déclencher 'useCycleList' avec la bonne valeur
const cyclelist = computed(() => {
  if (offerInfos.value.attributes.pictures.data) {
    const { state, next, prev } = useCycleList(offerInfos.value.attributes.pictures.data)

    return { state, next, prev }
  } else {
    return {}
  }
})
onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate[0]=pictures&populate[1]=owner.avatar`,
    )
    offerInfos.value = data.data
    console.log(offerInfos.value)
  } catch (error) {
    console.log(error)
  }
})

const formatedPrice = computed(() => {
  const price = offerInfos.value.attributes.price
  return formatPrice(price)
})

const formatDate = computed(() => {
  return offerInfos.value.attributes.updatedAt.split('T')[0].split('-').reverse().join('/')
})
</script>
<template>
  <p v-if="!offerInfos.id">Chargement en cours ...</p>
  <div v-else class="mx-auto h-full py-[30px]">
    <div class="flex gap-[20px]">
      <!-- First column -->
      <div class="w-2/3">
        <!-- Image carousel -->
        <div class="relative">
          <font-awesome-icon
            :icon="['fas', 'angle-left']"
            class="absolute left-[10px] top-1/2 mr-[3px]"
            v-if="offerInfos.attributes.pictures.data?.length > 1"
          />
          <img
            :src="cyclelist.state.value.attributes.url"
            :alt="offerInfos.attributes.title"
            v-if="cyclelist.state"
            class="h-[350px] w-full object-contain"
          />

          <font-awesome-icon
            :icon="['fas', 'angle-right']"
            class="absolute right-[10px] top-1/2 mr-[3px]"
            v-if="offerInfos.attributes.pictures.data?.length > 1"
          />
        </div>
        <h1 class="mx-[30px] text-[24px] font-bold">
          {{ offerInfos.attributes.title }}
        </h1>
        <p class="text-[18px] font-bold">{{ formatedPrice }} €</p>
        <p class="text-[12px]">{{ formatDate }}</p>
        <h2 class="mb-[25px] mt-[50px] border-t-[1px] border-t-lbc_grey_med pt-[20px] text-[18px] font-bold">Description</h2>
        <p>{{ offerInfos.attributes.description }}</p>
        <p class="mb-[25px] mt-[50px] border-t-[1px] border-t-lbc_grey_med pt-[20px]">
          <font-awesome-icon :icon="['fas', 'location-arrow']" />
          Agon-Coutainville (50230)
        </p>
      </div>
      <!-- Second column -->
      <div class="flex h-[375px] w-1/3 flex-col justify-between rounded-[2px] p-[20px] shadow-md shadow-lbc_grey_med">
        <!-- owner -->
        <div class="flex flex-col gap-[20px]">
          <div class="flex gap-[15px]">
            <img
              class="h-[65px] w-[65px] rounded-[50%] object-cover"
              :src="offerInfos.attributes.owner.data.attributes.avatar.data.attributes.url"
              alt=""
            />
            <p class="text-[18px] font-bold uppercase">
              {{ offerInfos.attributes.owner.data.attributes.username }}
            </p>
          </div>
          <p class="self-start rounded-[10px] bg-lbc_orange_pale px-[7px] py-[4px] text-[12px] text-lbc_brown">
            <font-awesome-icon :icon="['fas', 'check-double']" />
            Pièce d'identité vérifiée
          </p>
          <p class="text-[14px]">
            <font-awesome-icon :icon="['far', 'clock']" class="mr-[3px]" />
            Réponds généralement en une heure
          </p>
        </div>
        <div class="bt-[1px] flex flex-col gap-[10px] border-t-lbc_grey_med px-[15px]">
          <a href="" class="rounded-[15px] border-none bg-lbc_orange p-[15px] text-center font-bold text-white">Acheter</a>
          <button class="rounded-[15px] border-none bg-lbc_blue_dark p-[15px] text-center font-bold text-white">Message</button>
        </div>
      </div>
    </div>
  </div>
</template>
