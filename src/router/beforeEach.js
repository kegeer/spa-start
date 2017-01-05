import store from '../store'
const needAuth = auth => auth === true
const beforeEach = (to, from, next) => {
  const auth = to.meta.requiresAuth
  store.dispatch('resetMessage')
  if (!needAuth(auth)) {
    next()
    return
  }
  store.dispatch('checkUserToken')
    .then(() => {
    next()
    })
    .catch(() => {
    next({ name: 'auth.signin'})
    })
}
export default beforeEach
