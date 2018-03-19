import bailor from './bailor'
import carrier from './carrier'
import operator from './operator'

const UI = () => import('PAGES/demo/UI')
const Info = () => import('PAGES/demo/Info')
const Filter = () => import('PAGES/demo/Filter')
const Home = () => import(/* webpackChunkName: "home" */ 'PAGES/Home')
const User = () => import(/* webpackChunkName: "user" */ 'PAGES/User')

export default [
  { path: '/', redirect: '/home' },
  // 首页
  { path: '/home', component: Home },
  // ui demo
  { path: '/demo/ui', component: UI },
  // ajax demo
  { path: '/demo/info', component: Info },
  // filter demo
  { path: '/demo/filter', component: Filter },
  // 委托方会员中心首页
  {
    path: '/user',
    component: User,
    meta: { auth: true },
    children: [
      ...bailor,
      ...carrier,
      ...operator
    ]
  }
]
