<template>
<div class="h-screen p-5 bg-gray-100">
    <div class="flex justify-between pb-4">
        <h1 class="text-sm lg:text-2xl sm:text-base font-bold ">Liste des produits</h1>
        <a href="/AddProduct" class="bg-red-900 text-white py-1 px-2  font-semibold rounded">Ajouter
            produit</a>

    </div>
    <div class="overflow-auto rounded-lg shadow hidden sm:block">
        <table class="w-full">
            <thead class="bg-gray-50 border-b-2 border-gray-200">
            <tr>
                <th class="p-3 text-sm font-bold tracking-wide text-left">Nom du produit</th>
                <th class="p-3 text-sm font-bold tracking-wide text-left">Prix</th>
                <th class="p-3 text-sm font-bold tracking-wide text-left">Categorie</th>
                <th class="p-3 text-sm font-bold tracking-wide text-left">Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" class="bg-white border-b">
                    <a href="#" data-modal-toggle="staticModal">
                    <td  v-text="product.ProductName" class="p-3 text-sm text-neutral-800 font-semibold">
                    </td>
                    </a>
                    <td v-text="product.price" class="p-3 text-base text-gray-500 font-semibold"></td>
                    <td v-text="product.category" class="p-3 text-sm text-cactus"></td>
                    <td class="flex p-3 text-sm text-gray-500 gap-2">
                        <div>
                            <a href="/editProduct" type="button"
                               class=" bg-red-900 text-white p-1 rounded text-center font-semibold ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="#" type="button"  data-modal-toggle="popup-modal-supression"
                               class=" bg-neutral-800 text-white p-1  rounded text-center font-semibold">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>

</template>
<script setup>
    import useProduct from "../../composable/products";
    import {onMounted} from "vue";

        const { products, getProducts, add } = useProduct();

        onMounted( async () =>
        {
            await getProducts();
        }
        )

</script>