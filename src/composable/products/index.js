import { ref } from "vue";
import axios from 'axios';

export default function useProduct(){

    const products = ref([]);
    const cartCount = ref((0));

    const getProducts = async()=> {
        let response = await axios.get('http://localhost:8000/api/products',{
            headers: {
                Authorization: "Bearer "+ axios.defaults.headers.common['Authorization']
            }
        });
        products.value = response.data;

        return response;
    }



    return {
        products,
        getProducts,
        cartCount,
    }
}
