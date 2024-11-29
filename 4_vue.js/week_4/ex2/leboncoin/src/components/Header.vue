<script setup></script>
<template>
  <header>
    <div>
      <!-- Header container -->
      <div class="flex flex-col pt-3 pb-5 justify-between">
        <!-- Top bloc -->
        <div class="flex justify-between">
          <RouterLink to="/"><img src="../assets/svg/logo.svg" alt="" /></RouterLink>

          <!-- Top : Middle Part -->
          <div>
            <button class="bg-orangelbc text-white">
              <font-awesome-icon :icon="['fas', 'plus']" /> Déposer une annonce
            </button>
          </div>
          <div>
            <form><input type="text" placeholder="Recherche sur leboncoin" /></form>
            <button>
              <font-awesome-icon :icon="['fas', 'search']" />
            </button>
          </div>
          <!-- Top : Right part -->
          <div>
            <font-awesome-icon :icon="['fas', 'user']" />
            <p class="text-xl">Se connecter</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped></style>
