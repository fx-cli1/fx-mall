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
    },
    userinfo:()=>{
        return axios({
            method:'get',
            url:'/api/user/userinfo',
            headers:{
                token:sessionStorage.getItem('token')
            }
        })
    },
    uploads:(data)=>{
        return axios({
            method:"post",
            url:"/api/user/uploads",
            data
        })
    },
    setpassword:(data)=>{
        return axios({
            method:"post",
            url:"/api/user/setpassword",
            data
        })
    }
}