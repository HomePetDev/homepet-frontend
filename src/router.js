import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gerente from './views/Gerente.vue'
import GerenteSignin from './views/GerenteSignin.vue'
import newHomepet from './views/newHomepet.vue'
import Empleado from './views/Empleado.vue'
import Conocenos from './views/Conocenos.vue'
import Login from './views/Login.vue'
import Servicio from './views/Servicio.vue'
import Actividad from './views/Actividad.vue'
import MyHomepet from './views/MyHomepet.vue'
import Mascotas from './views/Mascotas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {path:'/gerente',component : Gerente},
    {path:'/gerente/signin', component: GerenteSignin },
    {path:'/gerente/homepet/new' , component: newHomepet },
    {path:'/gerente/empleados' , component: Empleado },
    {path:'/conocenos' , component: Conocenos },
    {path:'/login' , component: Login },
    {path:'/empleado' , component: Empleado},
    {path:'/empleado/servicio' , component: Servicio },
    {path: '/empleado/actividad', component: Actividad},
    {path:'/gerente/MyHomepet', component: MyHomepet},
    {path:'/gerente/Mascotas',component: Mascotas}
  ]
})
