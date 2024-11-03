<script setup>
import Title from './Title.vue'
import FirstParagraph from './firstParagraph.vue'
import SecondParagraph from './SecondParagraph.vue'
import ThirdParagraph from './ThirdParagraph.vue'
const props = defineProps({ personInfos: Object })
// console.log(props.personInfos)
</script>
<template>
  <section>
    <img
      src="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1704967000/RNCP31114/cours-vue/exo-sem-1/mystery-person_bueack.jpg"
      alt=""
    />
    <div>
      <Title
        :firstname="personInfos.firstname"
        :lastname="personInfos.lastname"
        :gender="personInfos.gender"
      />
      <FirstParagraph
        :gender="personInfos.gender"
        :age="personInfos.age"
        :job="personInfos.job"
      />
      <SecondParagraph
        :firstname="personInfos.firstname"
        :hobbies="personInfos.hobbies"
      />
      <ThirdParagraph :gender="personInfos.gender" :pet="personInfos.pet" />
    </div>
    <font-awesome-icon :icon="['fas', 'heart']" />
  </section>
</template>

<style scoped>
section {
  /* border: 1px solid red; */
  flex: 1;
  background-color: #eeeeee;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 7px v-bind('personInfos.favoriteColor');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
section > img {
  width: 100%;
  object-fit: cover;
  object-position: top;
  margin-bottom: 20px;
}
svg {
  align-self: flex-end;
  color: grey;
}
/* // media queries //  */
@media (max-width: 1250px) {
  section {
    flex: none;
    width: 275px;
  }
}
</style>
