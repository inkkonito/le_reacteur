<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { formatPrice } from '../utils/formatPrice.js'
const props = defineProps({
  offerInfos: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})

const formatDate = computed(() => {
  return props.offerInfos.updatedAt.split('T')[0].split('-').reverse().join('/')
})

const formatedPrice = computed(() => {
  const price = props.offerInfos.price
  return formatPrice(price)
})
</script>
<template>
  <RouterLink :to="{ name: 'offer', params: { id: id } }" class="flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-[5px]">
        <img
          :src="offerInfos.owner.data.attributes.avatar.data.attributes.url"
          alt=""
          v-if="offerInfos.owner.data.attributes.avatar.data"
          class="h-[25px] w-[25px] rounded-[50%]"
        />
        <p class="mt-[5px] text-[14px] font-bold">
          {{ offerInfos.owner.data.attributes.username }}
        </p>
      </div>
      <img :src="offerInfos.pictures.data[0].attributes.url" class="mb-[5px]rounded-lg mt-[7px] h-[240px] w-full object-cover" alt="" />
      <p class="font-bold">{{ offerInfos.title }}</p>
      <p class="mt-2 font-bold">{{ formatedPrice }}€</p>
    </div>
    <div class="flex items-end justify-between">
      <p>{{ formatDate }}</p>
      <font-awesome-icon :icon="['far', 'heart']" class="hover:-lbc_grey text-[20px] text-lbc_grey" />
    </div>
  </RouterLink>
</template>
<style scoped></style>
