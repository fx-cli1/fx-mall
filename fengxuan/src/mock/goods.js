const Mock = require("mockjs");
let data = Mock.mock({
    "data|10": [ 
        {
            "shopId|+1": 0,//生成商品id，自增1
            "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字
            "shopName": "@cname",//生成商品名 ， 都是中国人的名字
            "shopTel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
            "shopAddress": "@county(true)", //随机生成地址
            "shopStar|1-5": "★", //随机生成1-5个星星
            "salesVolume|30-1000": 30, //随机生成商品价格 在30-1000之间
            "shopLogo": "@Image('720x360','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
        }
    ]
})


export default data