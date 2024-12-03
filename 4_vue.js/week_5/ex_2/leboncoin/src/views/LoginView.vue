<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'

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
      console.log(data)
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
    class="flex h-[calc(100vh-190px)] items-center justify-center bg-[url('../src/assets/img/illustration.png')] bg-no-repeat bg-contain bg-bottom"
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
              class="rounded-tl-[15px] rounded-bl-[15px] flex-1 border-[1px] border-lbc_grey h-[45px] pl-[10px]"
              v-model="password"
            />
            <div
              class="border-[1px] border-lbc_grey flex items-center border-l-0 text-lbc_grey h-[45px] rounded-tr-[15px] rounded-br-[15px] w-[40px] p-[10px]"
            >
              <font-awesome-icon :icon="['far', 'eye-slash']" />
            </div>
          </div>
        </div>
        <button
          v-if="isSubmitting"
          class="bg-lbc_orange h-[45px] border-none rounded-[15px] text-white font-bold flex justify-center items-center gap-[15px]"
        >
          Connexion en cours...
        </button>
        <button
          v-else
          class="bg-lbc_orange h-[45px] border-none rounded-[15px] text-white font-bold flex justify-center items-center gap-[15px]"
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
