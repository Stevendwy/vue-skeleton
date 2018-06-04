/*
* @Author: steven
* @Date:   2018-06-04 10:05:38
* @Last Modified by:   steven
* @Last Modified time: 2018-06-04 10:07:54
*/

   const path = require('path')   
   const webpack = require('webpack')   
   const nodeExternals = require('webpack-node-externals')   
   const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')   
   module.exports = {   
     target: 'node', 
     entry: {    
     	   skeleton: './src/skeleton.entry.js'
     },
     output: {
       path: path.resolve(__dirname, './dist'),
       publicPath: '/dist/',
       filename: '[name].js',
       libraryTarget: 'commonjs2'
     },
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             'vue-style-loader',
             'css-loader'
           ]
         },
         {
           test: /\.vue$/,
           loader: 'vue-loader'
         }
       ]
     },
     externals: nodeExternals({
       whitelist: /\.css$/
     }),
     resolve: {
       alias: {
         'vue$': 'vue/dist/vue.esm.js'
       },
       extensions: ['*', '.js', '.vue', '.json']
     },
     plugins: [
       new VueSSRServerPlugin({
         filename: 'skeleton.json'
       })
     ]
   }
