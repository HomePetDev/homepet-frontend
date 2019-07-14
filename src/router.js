import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gerente from './views/Gerente.vue'
import GerenteSignin from './views/GerenteSignin.vue'
import newHomepet from './views/newHomepet.vue'
import Empleados from './views/Empleados.vue'
import Conocenos from './views/Conocenos.vue'
import Login from './views/Login.vue'
import Servicio from './views/Servicio.vue'
import Actividad from './views/Actividad.vue'
import MyHomepet from './views/MyHomepet.vue'
import Mascotas from './views/Mascotas.vue'
import Inventario from './views/Inventario.vue'
import Reservas from './views/Reservas.vue'
import NewFicha from './views/NewFicha.vue'

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
    {path:'/gerente/empleados' , component: Empleados },
    {path:'/conocenos' , component: Conocenos },
    {path:'/login' , component: Login },
    {path:'/empleado' , component: Empleados},
    {path:'/empleado/Servicio' , component: Servicio },
    {path: '/empleado/actividad', component: Actividad},
    {path:'/gerente/MyHomepet', component: MyHomepet},
    {path:'/gerente/Mascotas',component: Mascotas},
    {path:'/gerente/Inventario', component:Inventario},
    {path:'/gerente/Reservas', component:Reservas},
    {path:'/gerente/Servicio', component:Servicio},
    {path:'/gerente/Actividad', component:Actividad},
    {path:'/NewFicha', component:NewFicha},
  ]
})
