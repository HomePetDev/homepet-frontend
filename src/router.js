import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gerente from './views/Gerente.vue'
import GerenteSignin from './views/GerenteSignin.vue'
import newHomepet from './views/newHomepet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path:'/gerente',component : Gerente,
    },
    {path:'/gerente/signin', component: GerenteSignin },
    {path:'/gerente/homepet/new' , component: newHomepet }
  ]
})
