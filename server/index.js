const { resolve } = require('path')
const fs = require('fs')
const express = require('express')
// const { createRenderer } = require('vue-server-renderer')
// const { default: createApp } = require('../dist/server.bundle')

const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')

const server = express()

server.use(express.static(resolve('../dist'), { index: false }))

server.get('*', async (req, res) => {
  try {
    const url = req.url;

    // 创建vue实例 // main.js 
    // const app = createApp()
    // 创建渲染器
    // const render = createRenderer({
    //   template: fs.readFileSync('./index.ssr.html', 'utf-8')
    // })
    // 利用渲染器将vue实例转化成html字符串
    //  const html = await render.renderToString()
    const render = createBundleRenderer(serverBundle, {
      template: fs.readFileSync('./index.ssr.html', 'utf-8'),
      clientManifest
    })
    const html = await render.renderToString({ url })
    res.send(html)
  } catch (error) {
    console.error(error)
    if (error.code == 404) {
      res.status(404).send('页面去火星了，404')
    }
    res.status(500).send('server' + error)
  }
})

server.listen(9898, () => {
  console.log('server is run at 9898')
})