import axios from '../axios';
export default {
    sendYzm:(params)=>{
        return axios({
            method:'get',
            url:'/wyy-api/captcha/sent',
            params
        })
    },
    verificationYzm:(params)=>{
        return axios({
            method:'get',
            url:'/wyy-api/captcha/verify',
            params
        })
    }
}