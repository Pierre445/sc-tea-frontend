<template>
  <button type="button" v-on:click="addToCart" class="transition border border-red-800 ease-in-out hover:scale-105 hover:bg-red-800 duration-300 text-red-800 hover:text-white font-semibold italic rounded px-2 py-1  mt-10 mb-2">
    Ajouter au panier</button>
</template>

<script setup>
  import axios from "axios";
  import emitter from "../helpers/import";
  import {createToaster} from "@meforma/vue-toaster";
  import useCart from "../../composable/cart";

  const { add } = useCart();
  const productId = defineProps(['productId']);
  const toaster = createToaster({ /* options */ });

  const BearerToken = localStorage.getItem("bearerToken");

  const addToCart = async () => {

    await axios.get('http://localhost:8000/api/userCount',
        {
          headers: {
            Authorization: 'Bearer ' + BearerToken,
          }
        })
        .then(async() =>{

          let cartCount = await add(productId);

          emitter.emit('cartCountUpdated', cartCount,1);

          console.log(cartCount)

          toaster.success(`Votre produit a bien était ajouté. `,{position:
                "bottom-right"
          });

        })
        .catch(err => console.log(err),
        )
  }
</script>

<style scoped>

</style>