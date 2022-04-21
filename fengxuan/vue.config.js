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
    devServer: {
        proxy: {
            '/api': {
                target: 'http://101.35.104.121:9080',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/api': '' // 在请求的时候 凡是/api开头的地址都可以跨域
                }
            },
            '/wyy-api': {
                target: 'http://localhost:5555',
                changeOrigin: true,
                pathRewrite: {
                    '^/wyy-api': ''
                }
            }
        }
    }
    // ...
}