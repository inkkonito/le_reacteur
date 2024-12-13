<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, inject } from 'vue'
import axios from 'axios'

const router = useRouter()
const GlobalStore = inject('GlobalStore')

const name = ref('')
const email = ref('')
const password = ref('')
const displayPassword = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')

const handlingSubmit = async () => {
  isSubmitting.value = true
  if (name.value && email.value && password.value) {
    try {
      const { data } = await axios.post('https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local/register', {
        username: name.value,
        email: email.value,
        password: password.value,
      })

      console.log(data)

      const userInfos = {
        username: data.user.username,
        token: data.jwt,
      }
      GlobalStore.changeUserInfos(userInfos)

      $cookies.set('userInfos', userInfos)

      router.push({ name: 'home' })
    } catch (error) {
      if (error.response) {
        errorMessage.value = error.response.data.error.message
      } else {
        errorMessage.value = 'Une erreur est survenue, veuiller essayer à nouveau'
      }
    }
  } else {
    errorMessage.value = 'Veuillez remplir tous les champs'
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
        <h1>Inscrivez-vous pour découvrir toutes nos fonctionnalités.</h1>
      </div>
      <form @submit.prevent="handlingSubmit" class="my-[30px] flex flex-1 flex-col justify-between">
        <div class="flex flex-col">
          <label for="name" class="mb-[7px]">
            Nom
            <span class="text-lbc_grey">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="h-[45px] rounded-[15px] border-[1px] border-lbc_grey pl-[10px]"
            v-model="name"
            @input="() => (errorMessage = '')"
          />
        </div>
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
            @input="() => (errorMessage = '')"
          />
        </div>
        <div class="flex flex-col">
          <label for="password" class="mb-[7px]">
            Mot de passe
            <span class="text-lbc_grey">*</span>
          </label>
          <div class="flex">
            <input
              :type="displayPassword ? 'text' : 'password'"
              name="password"
              id="password"
              class="h-[45px] flex-1 rounded-bl-[15px] rounded-tl-[15px] border-[1px] border-lbc_grey pl-[10px]"
              v-model="password"
              @input="() => (errorMessage = '')"
            />
            <div
              class="flex h-[45px] w-[40px] items-center rounded-br-[15px] rounded-tr-[15px] border-[1px] border-l-0 border-lbc_grey p-[10px] text-lbc_grey"
            >
              <font-awesome-icon :icon="['far', 'eye']" v-if="displayPassword" @click="() => (displayPassword = !displayPassword)" />
              <font-awesome-icon :icon="['far', 'eye-slash']" v-else @click="() => (displayPassword = !displayPassword)" />
            </div>
          </div>
        </div>
        <button
          v-if="isSubmitting"
          class="mt-[20px] flex h-[45px] items-center justify-center gap-[15px] rounded-[15px] border-none bg-lbc_orange font-bold text-white"
        >
          Création en cours
        </button>
        <button
          v-else
          class="mt-[20px] flex h-[45px] items-center justify-center gap-[15px] rounded-[15px] border-none bg-lbc_orange font-bold text-white"
        >
          S'inscrire
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>

      <p class="text-center">
        Vous avez déjà un compte ?
        <RouterLink :to="{ name: 'login' }" class="font-bold underline">Connectez-vous</RouterLink>
      </p>
    </div>
  </div>
</template>
