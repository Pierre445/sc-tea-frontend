<template>
  <div class="sm:flex ">
    <a href="/shoppingCart" class="grid relative ">
      <span class="absolute -top-1 left-8 rounded-full bg-red-900 w-5 h-5 text-xs text-white flex items-center justify-center">{{ cartCount }}</span>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor" class="ml-4 w-6 h-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <h3 class="first-letter:inline-flex items-center tracking-widest px-1 pt-1 border-transparent text-xs font-medium leading-5 text-gray-300   hover:text-white focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">PANIER</h3>
    </a>
  </div>
</template>

<script setup>
    import {onMounted, ref} from "vue";
    import useCart from "../../composable/cart";
    import emitter from '../helpers/import';

    const {getCount} = useCart();
    const cartCount = ref(0);

    emitter.on('cartCountUpdated', (count) => cartCount.value = count)

    const addToCart = onMounted(async()=>  {
      cartCount.value = await getCount();
      console.log(cartCount.value)

    })
</script>

<style scoped>

</style>