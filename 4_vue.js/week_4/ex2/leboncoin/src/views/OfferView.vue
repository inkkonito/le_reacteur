<script setup>
// import libs
import axios from "axios";
import { onMounted, ref } from "vue";
const props = defineProps({
  id: {
    type: Object,
    required: true,
  },
});
const offerInfo = ref({});
onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}`,
    );
    offerInfo.value = data;
    console.log(offerInfo.value.data);
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div v-if="!offerInfo">En cours de chargement ..</div>
  <div v-else>
    <p>{{ offerInfo.data.id }}</p>
    <p>{{ offerInfo.data.attributes.title }}</p>
    <p>{{ offerInfo.data.attributes.description }}</p>
    <p>{{ offerInfo.data.attributes.price }}</p>
  </div>
</template>
<style scoped></style>
