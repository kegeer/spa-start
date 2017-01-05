const Dashboard = r => require.ensure([], () => r(require('./Main')), 'dashboard-bundle')
export default [
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard.main'
  },
  {
    path: '*',
    component: Dashboard,
    name: 'catchAll'
  }
]
