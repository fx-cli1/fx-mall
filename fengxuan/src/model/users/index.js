import axios from '../axios';
export default {
    login:(data)=>{
        return axios({
            method:'post',
            url:'/api/user/login',
            data
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