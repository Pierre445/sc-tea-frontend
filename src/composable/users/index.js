import axios from 'axios';
import {ref} from "vue";

export default function useUser(){

    const users = ref([]);

    const getUsers = async()=>{
        let response = await axios.get('http://localhost:8080/api/users')
        return response
    }
    const login = async()=>{
        let response = await axios.post('http://localhost:8080/api/user',this.formLogin)
            .then(res)

    }
}