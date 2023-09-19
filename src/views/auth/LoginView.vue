<template>
      <!-- Session Status -->
        <div class="flex min-h-full pb-16 flex-col justify-center px-6 lg:px-8 bg-gray-100 ">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Se connecter</h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-lg">
            <form class="space-y-6" v-on:submit.prevent="submitForm">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse Email</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email"  v-model="form.email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>

              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                  <div class="text-sm">
                    <a href="#" class="font-semibold text-red-800 hover:text-indigo-500">Mot de passe oublié ? </a>
                  </div>
                </div>
                <div class="mt-2">
                  <input id="password" name="password" type="password" autocomplete="current-password" v-model="form.password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>

              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-red-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
              Vous n'avez pas de compte ?
              <a href="#" class="font-semibold leading-6 text-red-800 hover:text-red-700">S'inscrire</a>
            </p>
          </div>
        </div>
</template>

<script >
  import useUser from "../../composable/users"
  import { RouterLink, RouterView } from 'vue-router'
  import axios from "axios";
  export default {
    name: 'PostFormAxios',
    data(){
      return {
        form: {
          email: 'admin@gmail.com',
          password:'password'
        }
      }
    },
    methods: {
      submitForm(){
        axios.post('http://localhost:8000/api/login',this.form)
           .then(res => {
             localStorage.setItem('bearerToken', res.data.token);
           })
        .catch ((error) => {
          if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
          } else {
            this.errorStatus = error.response.data.message;
          }
        })
        this.$router.push("/");
      }
    }
  }

</script>

<style scoped>

</style>