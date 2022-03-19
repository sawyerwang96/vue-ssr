const express = require('express')
const Vue = require('vue')
const serverRender = require('vue-server-renderer')

const server = express()



// 将Vue实例转化为html字符串（vue-server-renderer）
const render = serverRender.createRenderer()




server.get('*', (req, res) => {
  // res.send(req.url)
  const vm = new Vue({
    data() {
      return {
        msg: 'hello vue ssr'
      }
    },
    template: `<div>{{msg}}</div>`
  })
  
  render.renderToString(vm, (err, html) => {
    res.send(html)
  })
})
server.listen(9898, () => {
  console.log('server is running at 9898')
})