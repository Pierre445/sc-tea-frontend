<template>
    <div class="flex ">
        <div class="text-xl font-semibold mx-6 px-8 pt-6 mr-32">Catégorie</div>
        <div class="text-xl font-semibold mx-16 pt-6 ">Ajouter un produit</div>
    </div>
<div class="flex ">
    <div class="mx-16 pt-6 mb-24">
        <div class="bg-white p-6 shadow-md px-24 rounded">
            <div v-for="product in products">
                <h1 v-text="product.category" class=""></h1>
            </div>
            
        </div>
    </div>
                <form method="POST" v-on:submit.prevent="submitForm" enctype="multipart/form-data" class="pt-6 mb-24">

                    <div class="bg-white p-6 px-16 shadow-md rounded">
                        <div class="grid md:grid-cols-2 gap-4 md-gap-6"> 
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm mb-2" for="Nom de produit">Titre</label>
                                <input type="text" name="nom_produit"  v-model="form.ProductName" id="nom_produit" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm mb-2" for="Categorie">Catégorie</label>
                                <input type="text" name="categorie"  v-model="form.category" id="categorie" placeholder="" class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                            </div>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="Description">Description</label>
                            <textarea name="description"  v-model="form.description" cols="30" rows="5" class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="bg-white mt-4 p-8 shadow-md rounded mb-6">
                        <h3 class="pb-6 font-semibold">Prix</h3>
                    <div class="mb-4 px-1 ">
                        <label class="block text-gray-700 text-sm  mb-2" for="Prix">Prix</label>
                        <input type="text" name="prix" v-model="form.price"  id="prix" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                        <h3 class="pb-6 font-semibold">Ref</h3>
                        <div class="mb-4 px-1 ">
                            <label class="block text-gray-700 text-sm  mb-2" for="ref">Ref</label>
                            <input type="text" name="ref" v-model="form.ref" id="ref" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                    </div>
                    <div class="bg-white mt-4 p-8 shadow-md rounded mb-6">
                        <h3 class="mb-4 font-semibold">Support multimédia</h3>
                  
                        <div class="block mb-2 text-sm font-medium text-gray-900">
                            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none black:placeholder-gray-400" type="file" id="myFile" name="urlProduit">
                        </div>
                    </div>
                    <div class="flex items-center justify-center">
                        <button class="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Créer
                        </button>
                    </div>

                </form>
</div>
</template>
<script>
    // Commentaire du code
    import axios from 'axios';
    export default {
        name: 'PostFormAxios',
        data(){
            return {
                form: {
                ProductName: '',
                category: '',
                description: '',
                price: '',
                ref: '',
                }
            }
        },
        methods: {
            submitForm(){
                axios.post('http://localhost:8000/api/products',this.form,{
                    headers: {
                Authorization: "Bearer "+ axios.defaults.headers.common['Authorization']
            }
            })

                .then(res => {
                    console.log(res)
                })
                .catch((error)=>{
                    console.log(error)
                })
             this.$router.push("/DashboardListProduct");
            }
        }
    }

</script>