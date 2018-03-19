const Index = () => import('PAGES/operator/')
const Sub = () => import('PAGES/operator/Sub')

const operatorRoutes = [
  { path: 'operator', component: Index },
  { path: 'operator/sub', component: Sub }
].map(item => Object.assign(item, { meta: { role: 'operator' } }))

export default operatorRoutes
