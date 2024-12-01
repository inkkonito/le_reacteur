<script setup>
// import libs
import axios from "axios";
import { onMounted, ref } from "vue";
const props = defineProps({
  id: {
    required: true,
  },
});
const offerInfos = ref({});
onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}`,
    );
    offerInfos.value = data;
    console.log(offerInfos.value.data);
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div>
    <p>{{ offerInfos.data }}</p>
  </div>
</template>
