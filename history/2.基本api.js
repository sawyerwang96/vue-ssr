const express = require('express')
const path = require('path')
const fs = require('fs')
const Vue = require('vue')
const serverRender = require('vue-server-renderer')

const server = express()

const description = {
  title: 'ssr learning',
  meta: `<meta name="description" content="vue ssr指南"></meta>`
} 

// 将Vue实例转化为html字符串（vue-server-renderer）
// 支持页面模板
const render = serverRender.createRenderer({
  template: fs.readFileSync(path.resolve(__dirname, 'public/index.html'), 'utf-8')
})


server.get('*', async (req, res) => {
  try {
    const vm = new Vue({
      data() {
        return {
          msg: 'hello vue ssr'
        }
      },
      template: `<div>{{msg}}</div>`
    })
  
    const html = await render.renderToString(vm, description)
    // 两个问题
    // 1.页面失活
    // 2.开发、组件怎么写

    res.send(html)
  } catch(error) {
    console.log(error)
  }
})

server.listen(9898, () => {
  console.log('server is running at 9898')
})