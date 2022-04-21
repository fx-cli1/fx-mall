import axios from '../axios';
export default {
    login:()=>{
        return axios({
            method:'get',
            url:'/'
        })
    },
    register:(data)=>{
        return axios({
            method:'post',
            url:'/api/user/add',
            data
        })
    }
    
}