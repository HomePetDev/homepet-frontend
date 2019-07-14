import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gerente from './views/Gerente.vue'
import GerenteSignin from './views/GerenteSignin.vue'
import newHomepet from './views/newHomepet.vue'
import Empleados from './views/Empleados.vue'
import Conocenos from './views/Conocenos.vue'
import Login from './views/Login.vue'
import MyHomepet from './views/MyHomepet.vue'
import Mascotas from './views/Mascotas'
import Inventario from './views/Inventario'
import Reserva from './views/Reserva'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/gerente',component : Gerente
    },
    {path:'/gerente/signin', component: GerenteSignin },
    {path:'/gerente/homepet/new' , component: newHomepet },
    {path:'/gerente/empleados' , component: Empleados },
    {path:'/conocenos' , component: Conocenos },
    {path:'/login' , component: Login },
    {path:'/gerente/MyHomepet', component: MyHomepet},
    {path:'/gerente/Mascotas',component: Mascotas},
    {path:'/gerente/Inventario', component:Inventario},
    {path:'/gerente/Reservas', component:Reserva}
  ]
})
