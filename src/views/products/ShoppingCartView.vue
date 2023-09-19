<template>
  <!-- component -->

  <section class="antialiased text-gray-600  py-12 px-4 mb-24" >
    <div class="flex flex-col justify-center h-full">
      <!-- Table -->
      <div   class="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 relative">
        <header class="px-5 py-6 border-b border-gray-100 text-center">
          <div class="font-bold text-gray-800 uppercase text-xl">Votre Panier</div>
        </header>
        <div class="flex overflow-x-auto p-3">
          <table class="table-auto h-48 w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th></th>
              <th class="p-2">
                <div class="font-semibold text-left">Désignation</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Quantité</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Prix</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Total</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Action</div>
              </th>
            </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
            <!-- record 1 -->
            <template v-for="product in products" v-bind:key="product.id">
              <tr>
                <td class="p-2">
<!--                  <img :src="'storage/' + product.associatedModel.urlProduit" class=" w-16"  >-->
                </td>
                <td class="p-2">
                  <div class="font-medium text-gray-800" v-text="product.associatedModel.ProductName">
                  </div>
                </td>
                <td class="p-2">
                  <div class="w-20 h-8">
                    <div class="relative flex flex-row w-full h-8 space-x-4">
<!--                      <button v-on:click.prevent="decrease(product.id)"> - </button>-->
<!--                      <input :value="product.quantity" class="w-full text-center bg-gray-200 outline-none focus:outline-none font-semibold text-gray-700 hover:text-black"/>-->
<!--                      <button v-on:click.prevent="increase(product.id)"> + </button>-->
                    </div>
                  </div>
                </td>
                <td class="p-2">
<!--                  <div class="text-left" v-text="formatPrice(product.associatedModel.price)"></div>-->
                </td>
                <td class="p-2">
<!--                  <div class="text-left font-medium text-red-900" v-text="formatPrice(product.associatedModel.price * product.quantity) ">-->
<!--                  </div>-->
                </td>
                <td class="p-2">
                  <div class="flex justify-center">
<!--                    <button v-on:click.prevent="destroy(product.id)">-->
<!--                      <svg class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"-->
<!--                           fill="none" stroke="currentColor" viewBox="0 0 24 24"-->
<!--                           xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">-->
<!--                        </path>-->
<!--                      </svg>-->
<!--                    </button>-->
                  </div>
                </td>
              </tr>
            </template>
            </tbody>
          </table>
          <div class="grid grid-cols-1 w-1/4 justify-items-center">
            <div class="grid content-center gap-2 w-full text-center bg-neutral-200 h-56 ">
              <h3 class="font-bold">Total TTC</h3>
<!--              <h1 class=" mb-4">{{ cartTotal }}</h1>-->
              <a href="/checkout">
                <button class="bg-red-900 rounded rounded-full text-white p-2 px-4">
                  Passer commande
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
<!--  <div v-else>-->
<!--    <div class="grid gap-8 text-center content-center h-[490px]">-->
<!--      <p class="text-2xl font-black text-gray-400">Il semblerait que votre panier soit vide ?</p>-->
<!--      <a href="/">-->
<!--        <button class="rounded-full bg-red-900 text-white w-36 text-xl font-semibold place-self-center p-1">Ajouter</button>-->
<!--      </a>-->
<!--    </div>-->
<!--  </div>-->

</template>

<script setup>
  import {onMounted, computed } from "vue";
  import useCart from "../../composable/cart";
  import {formatPrice} from "../helpers/format";
  import { createToaster } from "@meforma/vue-toaster";
  import emitter from "../helpers/import";

  const toaster = createToaster({ /* options */ });
  const { products, getCart, increaseQuantity, decreaseQuantity, destroyProduct, cartCount } = useCart();

  const cartTotal = computed(() => {

    let price = Object.values(products.value)
        .reduce((acc, product) => acc += product.price * product.quantity, 0);
    return formatPrice(price);

  });

  const increase = async(id) => {
    await increaseQuantity(id);
    await getCart();
    toaster.success(`Votre produit a était ajouté. `,{position:
          "bottom-right", duration:1000, max:4 })
    emitter.emit('cartCountUpdated', cartCount.value);
  }

  const decrease = async(id) => {
    await decreaseQuantity(id);
    await getCart();
    toaster.error(`Votre produit a était retiré. `,{position:
          "bottom-right",duration:1000, max:4 })
    emitter.emit('cartCountUpdated', cartCount.value);
  }

  const destroy = async(id) => {
    await destroyProduct(id);
    await getCart();
    toaster.error(`Vos produit(s) ont été supprimer. `,{position:
          "bottom-right",duration:3000, max:4 })
    emitter.emit('cartCountUpdated', cartCount.value);
  }

  // const productExist =  () => {
  //   let product=  Object.values(products.value);
  //
  //   return product.length;
  // }

  onMounted(async() => {
    await getCart();

  })


</script>

<style scoped>

</style>