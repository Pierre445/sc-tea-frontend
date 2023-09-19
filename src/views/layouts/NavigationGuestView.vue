<template>
  <nav x-data="{ open: false }" class="bg-neutral-900">
    <div class="mx-auto px-4 sm:px-6 py-2 pt-3 lg:px-12 border-b-4 border-red-900">
      <div class="shrink-0 flex justify-between items-center px-6">
        <div class="flex gap-8">
          <x-application-logo></x-application-logo>
          <router-link to="/" class="inline-flex tracking-widest items-center px-1 pt-1 border-transparent text-xs leading-5 text-gray-300 hover:text-white focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">CATALOGUE</router-link>
<!--          <div class="hidden sm:-my-px sm:ml-10 sm:flex">-->
<!--            <router-link to="/login" class="text-white">Se connecter</router-link>-->
<!--          </div>-->
        </div>
        <!-- If Auth == null -->
        <div v-if="token">
          <div class="flex">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-5 h-6 text-white ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <router-link to="/login" class="inline-flex tracking-widest items-center px-1 pt-1 border-transparent text-xs leading-5 text-gray-300 hover:text-white focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">COMPTE</router-link>
            </div>
            <navbar-cart></navbar-cart>
          </div>

        </div>
        <div v-else>
          <div class="flex">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-10 h-6 text-white ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <router-link to="/login" class="inline-flex tracking-widest items-center px-1 pt-1 border-transparent text-xs leading-5 text-gray-300 hover:text-white focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">SE CONNECTER</router-link>
            </div>
          </div>
        </div>
        </div>
        </div>

  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted, ref} from "vue";

const token = ref([]);

  onMounted( async () => {
    token.value = localStorage.getItem("bearerToken")
})
</script>

<style scoped>

</style>