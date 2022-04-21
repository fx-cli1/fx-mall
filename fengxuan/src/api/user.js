import request from "./axios"
export function add(data){
    return request({
        url:'/api/user/add',
        method:'post',
        data,
    });
}