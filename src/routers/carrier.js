const Index = () => import('PAGES/carrier/')
const Sub = () => import('PAGES/carrier/Sub')

const carrierRoutes = [
  { path: 'carrier', component: Index },
  { path: 'carrier/sub', component: Sub }
].map(item => Object.assign(item, { meta: { role: 'carrier' } }))

export default carrierRoutes
