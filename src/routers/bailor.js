const Index = () => import('PAGES/bailor/')
const Sub = () => import('PAGES/bailor/Sub')

const bailorRoutes = [
  { path: 'bailor', component: Index },
  { path: 'bailor/sub', component: Sub }
].map(item => Object.assign(item, { meta: { role: 'bailor' } }))

export default bailorRoutes
