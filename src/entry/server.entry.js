import createApp from '../main'

export default function (context) {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)
    router.onReady(() => {
      // 判断当前路由下是否存在组件
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      Promise.all(matchedComponents.map(c => {
        if (c.asyncData) {
          return c.asyncDate(store)
        }
      })).then(() => {
        // window.__INITIAL_STATE__
        console.log(store.state)
        context.state = store.state
        resolve(app)

      }).catch(reject)

    }, reject)
  })
}
