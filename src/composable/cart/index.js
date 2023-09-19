import { ref } from "vue";
import axios from 'axios';

export default function useCart(){

    const products = ref([]);
    const cartCount = ref((0));


    const getCart = async()=> {
        let response = await axios.get('http://localhost:8000/api/products',{
            headers: {
                Authorization: "Bearer "+"23|yNXytIdBDRoD6Le8ehxRpHEzjbulLE7G1PbUTyV0"
            }
        });
        products.value = response.data.cartContent;
        cartCount.value  = response.data.cartCount;

        return response;
    }

    const add = async(productId) =>
    {
        let response = await axios.post('http://localhost:8000/api/cart',{
            productId : productId
        },{
            headers: {
                Authorization: "Bearer "+"23|yNXytIdBDRoD6Le8ehxRpHEzjbulLE7G1PbUTyV0"
            }
        })
         return response.data.count;
        //console.log(response)
    }
    const getCount = async() =>
    {
        let response = await axios.get('http://localhost:8000/api/cart/count', {
            headers: {
                Authorization: "Bearer " + "23|yNXytIdBDRoD6Le8ehxRpHEzjbulLE7G1PbUTyV0"
            }
        });
        return response.data.count;
        //console.log(response.data.count)
    }
    const increaseQuantity = async(id) => {
        await axios.get('api/products/increase/' + id);
    }

    const decreaseQuantity = async(id) => {
        await axios.get('api/products/decrease/' + id);
    }

    const destroyProduct = async(id) => {
        await axios.delete('/api/products/' + id);
    }

    return {
        add,
        getCount,
        products,
        increaseQuantity,
        decreaseQuantity,
        destroyProduct,
        cartCount,
        getCart
    }
}
