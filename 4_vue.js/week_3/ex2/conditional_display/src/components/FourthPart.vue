<template>
  <section>
    <div v-for="user in usersList" :key="user.id">
      <img :src="user.account.avatar.url" alt="" v-if="user.account.avatar" v />
      <img v-else src="https://icons.veryicon.com/png/o/system/ali-mom-icon-library/random-user.png" alt="">
      <p>{{ user.firstname }}</p>
      <p>{{ user.lastname }}</p>
      <p>{{ user.age }}</p>
    </div>
  </section>
</template>

<style scoped>
div img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
section {
  display: flex;
  justify-content: center;
  gap: 10px
}
section div {
  border: 1px solid red;
}
</style>
<script setup>
const usersList = [
  {
    id: 23,
    gender: 'female',
    firstname: 'Emily',
    lastname: 'Parker',
    age: 24,
    account: {
      premium: true,
      avatar: {
        url: 'https://res.cloudinary.com/lereacteur-apollo/image/upload/v1706536025/RNCP31114/cours-vue/exos-sem-3/conditionnal-display-emily_py1pu1.jpg',
      },
    },
  },
  {
    id: 54,
    gender: 'male',
    firstname: 'Marcus',
    lastname: 'Bennett',
    age: 38,
    account: {
      premium: false,
    },
  },
]
</script>
