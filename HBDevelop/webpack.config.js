const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const path = require('path');
const { mainModule } = require('process');

module.exports={
    entry: "./src/app.js",
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    }, 
    plugins:[new MiniCssExtractPlugin({filename:'main.css'}),
        new HtmlWebpackPlugin({template: './src/index.pug',
        filename:'index.html'
    })
    
    ],
    
    module:{
        rules:[
       
             
              {
                test:/\.s[ac]ss$/i,
                   use:[

                    {loader:MiniCssExtractPlugin.loader,
                        options:{
                            esModule:true,
                        },
                   },"css-loader",
                        {
                          loader: "sass-loader",
                            options:{
                                implementation:require("node-sass"),
                            }
                 },
                ],
               },
            
              
            
              {
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
				pretty: true
				}
			}  
        
        ],   
    },
   
};