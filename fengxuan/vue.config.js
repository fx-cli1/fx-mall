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
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/getDiscList': {
                target: 'http://localhost:2345',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/api': '/api/' // 在请求的时候 凡是/api开头的地址都可以跨域
                }
            },
        }
    }
    // ...
}