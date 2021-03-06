/*
* @Author: steven
* @Date:   2018-06-04 10:12:16
* @Last Modified by:   steven
* @Last Modified time: 2018-06-04 11:21:58
*/

const fs = require('fs')
const { resolve } = require('path')
const htmlMinifier = require('html=minifier')

const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

//读取 skeleton.json 以 index.html 模板写入内容
const renderer = createBundleRenderer(resolve(__dirname , './dist/skeleton.json'),{
	template : fs.readFileSync(resolve(__dirname, './index.html'), 'utf-8')
})

//把上一步模板完成的内容写入 （替换） index.html
renderer.renderToString({}, (err,html) => {
	html = htmlMinifier.minify(html,{
		minifyCSS : true
	})
	fs.writeFileSync('index.html', html , 'utf-8')
})