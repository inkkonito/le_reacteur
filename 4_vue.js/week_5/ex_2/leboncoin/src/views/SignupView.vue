<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div
    class="flex h-[calc(100vh-190px)] items-center justify-center bg-[url('../src/assets/img/illustration.png')] bg-no-repeat bg-contain bg-bottom"
  >
    <div class="flex h-[490px] w-[480px] flex-col justify-between rounded-[15px] bg-white p-[30px] shadow-custom-grey">
      <div>
        <h2 class="mb-[15px] text-[24px] font-bold">Bonjour !</h2>
        <h1>Inscrivez-vous pour découvrir toutes nos fonctionnalités.</h1>
      </div>
      <form @submit.prevent="" class="my-[30px] flex flex-1 flex-col justify-between">
        <div class="flex flex-col">
          <label for="name" class="mb-[7px]">
            Nom
            <span class="text-lbc_grey">*</span>
          </label>
          <input type="text" id="name" name="name" class="h-[45px] rounded-[15px] border-[1px] border-lbc_grey pl-[10px]" />
        </div>
        <div class="flex flex-col">
          <label for="email" class="mb-[7px]">
            E-mail
            <span class="text-lbc_grey">*</span>
          </label>
          <input type="email" id="email" name="email" class="h-[45px] rounded-[15px] border-[1px] border-lbc_grey pl-[10px]" />
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
            />
            <div
              class="border-[1px] border-lbc_grey flex items-center border-l-0 text-lbc_grey h-[45px] rounded-tr-[15px] rounded-br-[15px] w-[40px] p-[10px]"
            >
              <font-awesome-icon :icon="['far', 'eye-slash']" />
            </div>
          </div>
        </div>
        <button
          class="bg-lbc_orange h-[45px] border-none rounded-[15px] text-white font-bold flex justify-center items-center gap-[15px] mt-[20px]"
        >
          Se connecter
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
      </form>
      <p class="text-center">
        Vous avez déjà un compte ?
        <RouterLink :to="{ name: 'login' }" class="font-bold underline">Connectez-vous</RouterLink>
      </p>
    </div>
  </div>
</template>
