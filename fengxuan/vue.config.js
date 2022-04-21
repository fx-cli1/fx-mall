module.exports = {
    // ...
    css: {
        sourceMap: true,
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    /* rem适配忽略文件目录 */
                    require('postcss-px2rem-exclude')({
                        remUnit: 75,  // 参数 1
                        exclude: /node_modules|vant/i,  // 参数 2
                    }),
                ],
            },
        },
    },
    pages: {
        index: {
        //入口
            entry:"src/main.js",
        },
    },
    devServer: {
        proxy:{
            '/api':{
                target:'http://101.35.104.121/9080',
                changeOrigin: true,
                pathRewrite:{
                    "^/api":''
                }
            }
        }
    }

}