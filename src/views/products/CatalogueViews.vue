<template>
<!--  <div v-if=" products.length > 0">-->
    <div class="grid hidden sm:block mt-16 px-12 place-content-center mx-2 ">
      <div class="grid md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
        <div  v-for="product in products">

          <div class="grid mt-8 mb-14 bg-neutral-200 gap-2 py-12 justify-items-center p-3 w-[270px]">
            <!--    <img src="{{ Storage::url($produit->urlProduit) }}" class="w-36" id="image_produit">-->
            <p v-text="product.ProductName" class="text-black font-medium text-xs pt-4"></p>
            <a href="" v-text="product.ProductName" class="mt-2 text-red-800 text-center text-light font-bold italic tracking-wider uppercase "></a>
            <p class="text-neutral-900 text-2xl pt-2 font-medium" v-text="product.price"></p>
          <add-to-cart :product-id="product.id"></add-to-cart>
            {{product.id}}
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
  import useProduct from "../../composable/products";
  import {onMounted} from "vue";
  import {createToaster} from "@meforma/vue-toaster";

  const toaster = createToaster({ /* options */ });

      const { products, getProducts, add } = useProduct();

      onMounted( async () =>
      {
        await getProducts();
      }
      )
</script>

<style scoped>

</style>