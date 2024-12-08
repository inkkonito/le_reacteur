<script setup>
import { RouterLink } from 'vue-router'
import { ref, inject } from 'vue'
import axios from 'axios'
import router from '@/router'

const GlobalStore = inject('GlobalStore')
const email = ref('')
const password = ref('')
const isSubmitting = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  // console.log('submit =>', {
  //   email: email.value,
  //   password: password.value,
  // })
  try {
    isSubmitting.value = true

    if (email.value && password.value) {
      const { data } = await axios.post('https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local', {
        identifier: email.value,
        password: password.value,
      })
      // console.log(data)
      GlobalStore.changeUserInfos({
        username: data.user.username,
        token: data.jwt,
      })

      router.push({ name: 'home' })
    } else {
      errorMessage.value = 'Veuillez remplir tous les champs'
    }
  } catch (error) {
    console.log(error)
    if (error.response) {
      errorMessage.value = error.response.data.error.message
    } else {
      errorMessage.value = 'Un problème est survenu, veuillez essayer à nouveau.'
    }
  }
  isSubmitting.value = false
}
</script>
<template>
  <div
    class="flex h-[calc(100vh-190px)] items-center justify-center bg-[url('../src/assets/img/illustration.png')] bg-contain bg-bottom bg-no-repeat"
  >
    <div class="flex h-[490px] w-[480px] flex-col justify-between rounded-[15px] bg-white p-[30px] shadow-custom-grey">
      <div>
        <h2 class="mb-[15px] text-[24px] font-bold">Bonjour !</h2>
        <h1>Connectez-vous pour découvrir toutes nos fonctionnalités.</h1>
      </div>
      <form @submit.prevent="handleSubmit" class="my-[40px] flex flex-1 flex-col justify-between">
        <div class="flex flex-col">
          <label for="email" class="mb-[7px]">
            E-mail
            <span class="text-lbc_grey">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="h-[45px] rounded-[15px] border-[1px] border-lbc_grey pl-[10px]"
            v-model="email"
          />
        </div>
        <div class="flex flex-col">
          <label for="password" class="mb-[7px]">
            Mot de passe
            <span class="text-lbc_grey">*</span>
          </label>
          <div class="flex">
            <input
              type="password"
              name="password"
              id="password"
              class="h-[45px] flex-1 rounded-bl-[15px] rounded-tl-[15px] border-[1px] border-lbc_grey pl-[10px]"
              v-model="password"
            />
            <div
              class="flex h-[45px] w-[40px] items-center rounded-br-[15px] rounded-tr-[15px] border-[1px] border-l-0 border-lbc_grey p-[10px] text-lbc_grey"
            >
              <font-awesome-icon :icon="['far', 'eye-slash']" />
            </div>
          </div>
        </div>
        <button
          v-if="isSubmitting"
          class="flex h-[45px] items-center justify-center gap-[15px] rounded-[15px] border-none bg-lbc_orange font-bold text-white"
        >
          Connexion en cours...
        </button>
        <button
          v-else
          class="flex h-[45px] items-center justify-center gap-[15px] rounded-[15px] border-none bg-lbc_orange font-bold text-white"
        >
          Se connecter
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
      <p class="text-center">
        Envie de nous rejoindre ?
        <RouterLink :to="{ name: 'signup' }" class="font-bold underline">Créer un compte</RouterLink>
      </p>
    </div>
  </div>
</template>
