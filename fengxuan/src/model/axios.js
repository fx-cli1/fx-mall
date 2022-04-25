import axios from 'axios';
// axios.defaults.url = '/api';//那个main文件里面有个路劲没改

const server =axios.create({
    // timeout: 1000,
        // `withCredentials` 表示跨域请求时是否需要使用凭证
    // withCredentials: true, // default,
        // headers是即将被发送的自定义请求头
    headers: {
        // 'Content-type': 'application/json, charset=utf-8',
        'token':sessionStorage.getItem('token'),
    },
})
export default server; 