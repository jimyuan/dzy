const Home = () => import(/* webpackChunkName: "home" */ 'PAGES/Home')
const Demo = () => import(/* webpackChunkName: "home" */ 'PAGES/Demo')

export default [
  {
    path: '/',
    redirect: '/home'
  }, {
    // 首页
    path: '/demo',
    component: Demo
  }, {
    // 首页
    path: '/home',
    component: Home
  }
]
