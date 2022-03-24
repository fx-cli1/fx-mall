const Mock = require("mockjs");
// import goods from './goods'
import swipe from './swipe'
import recommendgoods from './recommendgoods'
// Mock.mock(/goods\/add/, 'post', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
//     return goods
// })
Mock.mock(/goods\/swipe/, 'get', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return swipe
})
Mock.mock(/goods\/recommendgoods/, 'get', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return recommendgoods
})