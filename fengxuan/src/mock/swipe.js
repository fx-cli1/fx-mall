const Mock = require("mockjs");
let data = Mock.mock({
    "data|4": [ 
        {
            "shopId|+1": 0,//生成商品id，自增1
            "imgsrc": "@Image('720x360','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
            // "imgsrc":"@Image('720x360')"
        }
    ]
})


export default data