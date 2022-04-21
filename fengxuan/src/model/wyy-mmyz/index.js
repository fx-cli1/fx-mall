import axios from '../axios';
export default {
    sendYzm:(params)=>{  //发送短信
        return axios({
            method:'get',
            url:'/wyy-api/captcha/sent',
            params
        })
    },
    verificationYzm:(params)=>{   //验证短信
        return axios({
            method:'get',
            url:'/wyy-api/captcha/verify',
            params
        })
    }
}