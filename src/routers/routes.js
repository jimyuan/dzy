const Home = () => import(/* webpackChunkName: "home" */ 'PAGES/Home')
const Demo = () => import(/* webpackChunkName: "demo" */ 'PAGES/Demo')
const Info = () => import(/* webpackChunkName: "info" */ 'PAGES/Info')

export default [
  {
    path: '/',
    redirect: '/home'
  }, {
    // UI 例子
    path: '/demo',
    component: Demo
  }, {
    // Ajax 例子
    path: '/info',
    component: Info
  }, {
    // 首页
    path: '/home',
    component: Home
  }
]
