import axios from "./axios";

export function add(data) {
    return axios({
        url: '/user/add',
        method: 'post',
        data,
    });
}