<script setup></script>
<template>
  <header class="border-b-2">
    <!-- Header container -->
    <div class="flex flex-col pt-3 pb-5 justify-between max-w-[1050px] mx-auto">
      <!-- Top bloc -->
      <div class="flex justify-between items-center">
        <RouterLink to="/"><img src="../assets/svg/logo.svg" alt="" class="w-40" /></RouterLink>
        <!-- Top : Middle Part -->
        <div class="flex gap-5">
          <div>
            <button class="bg-orangelbc px-4 py-2 rounded-xl font-bold">
              <font-awesome-icon
                :icon="['fas', 'plus']"
                class="text-white mx-1 text-lg border-2 p-[1px] font-bold"
              />
              <span class="text-white text-lg">Déposer une annonce</span>
            </button>
          </div>
          <div class="bg-greylbc rounded-lg">
            <form class="flex">
              <input
                type="text"
                placeholder="Recherche sur leboncoin"
                class="bg-greylbc rounded-lg w-72 pl-2 text-lg placeholder-gray-500"
              />
              <button class="p-2">
                <span class="bg-orangelbc p-2 rounded-lg">
                  <font-awesome-icon :icon="['fas', 'search']" class="text-sm font-thin" />
                </span>
              </button>
            </form>
          </div>
        </div>
        <!-- Top : Right part -->
        <div>
          <a href="/login" class="flex flex-col justify-center items-center">
            <font-awesome-icon :icon="['far', 'user']" />
            <p class="text-base">Se connecter</p>
          </a>
        </div>
      </div>
      <!-- Bottom Bloc -->
      <div class="mt-4">
        <ul class="flex justify-between items-center">
          <li>Immobilier</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="w-1 h-1" />
          <li>Véhicules</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="w-1 h-1" />
          <li>Location de vacances</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="w-1 h-1" />
          <li>Emploi</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="w-1 h-1" />
          <li>Mode</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="w-1 h-1" />
          <li>Maison & Jardin</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="w-1 h-1" />
          <li>Famille</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="w-1 h-1" />
          <li>Electronique</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="w-1 h-1" />
          <li>Loisirs</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="w-1 h-1" />
          <li>Autres</li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style scoped></style>
