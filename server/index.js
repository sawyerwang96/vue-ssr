const express = require('express')
const { createRenderer } = require('vue-server-renderer')
const fs = require('fs')
const { default: createApp } = require('../dist/server.bundle')
const { resolve } = require('path')

const server = express()

server.use(express.static(resolve('../dist'), { index: false }))

server.get('*', async (req, res) => {
  try {
    // 创建vue实例 // main.js 
    const app = createApp()
    // 创建渲染器

    const render = createRenderer({
      template: fs.readFileSync('./index.ssr.html', 'utf-8')
    })

    // 利用渲染器将vue实例转化成html字符串
    const html = await render.renderToString(app)

    res.send(html)
  } catch (error) {
    console.error(error)
    res.send('server' + error)
  }
})

server.listen(9898, () => {
  console.log('server is run at 9898')
})