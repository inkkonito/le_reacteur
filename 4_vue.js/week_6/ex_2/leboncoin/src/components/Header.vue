<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { inject, ref } from 'vue'

const GlobalStore = inject('GlobalStore')

// console.log(GlobalStore.userInfos)

const disconnectUser = () => {
  GlobalStore.changeUserInfos(null)
  $cookies.remove('userInfos')
}

const search = ref('')
const route = useRoute()
const router = useRouter()

const handleSubmit = () => {
  const queries = { ...route.query }

  if (search.value) {
    queries.title = search.value
  } else {
    delete queries.title
  }
  // add page 1

  router.push({ name: 'home', query: queries })
}
</script>
<template>
  <header class="fixed left-0 top-0 z-10 h-[110px] w-full border-b-2 bg-white">
    <!-- Header container -->
    <div class="mx- mx-auto flex max-w-[1050px] flex-col justify-between pb-5 pt-5">
      <!-- Top bloc -->
      <div class="flex items-center justify-between">
        <RouterLink to="/"><img src="../assets/svg/logo.svg" alt="" class="w-[140px]" /></RouterLink>
        <!-- Top : Middle Part -->
        <div class="flex gap-5">
          <div>
            <button class="rounded-xl bg-lbc_orange px-4 py-2 font-bold">
              <font-awesome-icon :icon="['fas', 'plus']" class="mx-1 border-2 p-[1px] text-lg font-bold text-white" />
              <span class="text-lg text-white">Déposer une annonce</span>
            </button>
          </div>
          <div>
            <form @submit.prevent="handleSubmit" class="flex rounded-lg bg-lbc_grey_light">
              <input
                v-model="search"
                type="text"
                placeholder="Recherche sur leboncoin"
                class="w-72 rounded-lg bg-transparent pl-2 text-lg placeholder-gray-500"
              />
              <button class="bg-none p-2">
                <span class="rounded-lg bg-lbc_orange p-2">
                  <font-awesome-icon :icon="['fas', 'search']" class="text-sm font-thin" />
                </span>
              </button>
            </form>
          </div>
        </div>
        <!-- Top : Right part -->
        <div
          v-if="GlobalStore && GlobalStore.userInfos && GlobalStore.userInfos.value && GlobalStore.userInfos.value.username"
          class="flex h-full items-center gap-[30px] text-[16px]"
        >
          <div class="flex flex-col items-center justify-center">
            <font-awesome-icon :icon="['far', 'user']" />
            <p class="text-[12px]">{{ GlobalStore.userInfos.value.username }}</p>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-right']" @click="disconnectUser" class="cursor-pointer text-lbc_grey" />
          </div>
        </div>
        <div v-else>
          <a href="/login" class="flex flex-col items-center justify-center">
            <font-awesome-icon :icon="['far', 'user']" class="" />
            <p class="text-base">Se connecter</p>
          </a>
        </div>
      </div>
      <!-- Bottom Bloc -->
      <div class="mb-2 mt-4">
        <ul class="flex items-center justify-between">
          <li>Immobilier</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Véhicules</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Location de vacances</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Emploi</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Mode</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Maison & Jardin</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Famille</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Electronique</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Loisirs</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Autres</li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style scoped></style>
