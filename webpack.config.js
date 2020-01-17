

// webpack 配置文件    打包工具 & 模块化开发
// 入口
// 出口
// 打包规则   png   js  css  vue(单文件组件)
// 插件 plugins

const path = require("path");   // Node 官方 模块  Http / Url
const htmlWebpackPlugin = require("html-webpack-plugin"); // 处理 HTML
const openBrowserWebpackPlugin =  require("open-browser-webpack-plugin");
const extractTextWebpackPlugin  = require("extract-text-webpack-plugin");  // 抽离样式
const webpack = require("webpack");

module.exports = {
     entry:["./src/main.js"] ,  // 入口文件

     output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[hash:8].js",  // MD5 加密规则得到 长度 为 8 的随机字符串 阻止缓存
        publicPath:""  , // 公共路径  上线需要处理
     },

     devtool:"source-map",  // 调试代码

     resolve:{
         alias:{   // 别名
            "react":path.resolve(__dirname,'node_modules','react')  // 减少查询的深度
         }
     },

    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,  // 排除
                use:["babel-loader"]
            },
            {
                test:/\.(png|gif|svg|jpg|woff|woff2|eot|ttf)\??.*$/,
                use:["url-loader?limit=8192&name=font/[name].[hash:8].[ext]"]
            },
            {
                test:/\.(css|scss)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  // 转为 Node 风格代码
                    use:[
                        'css-loader',  // 变成JS 模块
                        {
                            loader:"postcss-loader",   // 编译CSS
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),    // 美化CSS 代码
                                        require('postcss-px2rem-exclude')(
                                            {
                                                remUnit:100,
                                                exclude:/antd-mobile/i,  // 排除 antd-mobile不需要进行 rem 转换
                                            }
                                        ), // px 转 rem
                                        require("autoprefixer")  // 自动补全
                                    ]
                                }
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test:/\.(css|less)/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  // 转为 Node 风格代码
                    use:[
                        'css-loader',  // 变成JS 模块
                        {
                            loader:"postcss-loader",   // 编译CSS
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),    // 美化CSS 代码
                                        require('postcss-px2rem-exclude')(
                                            {
                                                remUnit:100,
                                                exclude:/antd-mobile/i,  // 排除 antd-mobile不需要进行 rem 转换
                                            }
                                        ), // px 转 rem
                                        require("autoprefixer")  // 自动补全
                                    ]
                                }
                            }
                        },
                        "less-loader"
                    ]
                })
            }
        ]
     },

    //  配置 服务器
     devServer:{
        contentBase:path.join(__dirname,"dist"),
        compress:true,
        hot:true,
        host:"0.0.0.0",
        port:7300,
        // open:true,  // 自动打开
        proxy:{    // 代理 ajax  跨域   声明新的指向

        },
        publicPath:"",// 公共路径  上线需要处理
        historyApiFallback:true , //  HTML5 - history- Api
        disableHostCheck:true
     },

    //  配置 webpack 插件
     plugins:[
         new openBrowserWebpackPlugin({url:"http://localhost:7300"}),

         new htmlWebpackPlugin({
            template:"./src/index.html"  ,  //  指明编译的html
            inject:true   // 自动注入打包的css/js
         }),

         new extractTextWebpackPlugin({
             filename:"css/app.[hash:8].css",
             allChunks:true,  // 编译所有数据
             disable:false  // true 不抽离
         }),
         new webpack.ProvidePlugin({
             React: "react",                            //设置React为全家变量 不用import
             Component: ['react', 'Component']          //设置 React下面的Component 为全局变量  也不用 import
         }),
     ]

}