const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:"development",
     entry: "./src/script/main.js",
    // {
    //     index:"./src/script/main.js",
    //     details:"./src/script/main_detalist.js",
    //     cartlist:"./src/script/main_cartlist.js"
    // },
    output:{
       path: path.resolve(__dirname, 'dist'),
       filename:"[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:"小米商城",
            template:"./src/index1.html",
            filename: 'index.html',
            chunks:['main'],
            minify:{
                removeComments: true,//删除注释
                collapseWhitespace:true//删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'header.html',
            template: 'src/header.html',
            chunks:[],
            minify:{
                removeComments: true,//删除注释
                collapseWhitespace:true//删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'nav.html',
            template: 'src/nav.html',
            chunks:[],
            minify:{
                removeComments: true,//删除注释
                collapseWhitespace:true//删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'footer.html',
            template: 'src/footer.html',
            chunks:[],
            minify:{
                removeComments: true,//删除注释
                collapseWhitespace:true//删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'details.html',
            chunks:['main'],
            template: 'src/details.html',
            minify:{
                removeComments: true,//删除注释
                collapseWhitespace:true//删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'cartlist.html',
            chunks:['main'],
            template: 'src/cartlist.html',
            minify:{
                removeComments: true,//删除注释
                collapseWhitespace:true//删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            chunks:['main'],
            template: 'src/login.html',
            minify:{
                removeComments: true,//删除注释
                collapseWhitespace:true//删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            chunks:['main'],
            template: 'src/register.html',
            minify:{
                removeComments: true,//删除注释
                collapseWhitespace:true//删除空格
            }
        }),
        new CopyWebpackPlugin([{
            from: __dirname+"/src/images",
            to: __dirname + "/dist/images"
        }
        ]),
        new CleanWebpackPlugin(),
    ],
    module:{
        rules: [
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }
                ]
            },
            // { //配置图片文件的包
            //     test: /\.(png|jpg|gif|svg|ico)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: 'images/[name].[ext]'
            //     }
            // },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
}