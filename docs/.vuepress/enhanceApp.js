export default ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    import('vue-toasted' /* webpackChunkName: "notification" */).then(module => {
      Vue.use(module.default)
    })
  }
}
