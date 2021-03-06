import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
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
import Reserva from './views/Reserva.vue'
import NewFicha from './views/NewFicha.vue'
import Cliente from "./views/Cliente.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {path:'/gerente/signin', component: GerenteSignin },
    {path:'/gerente/homepet/new' , component: newHomepet },
    {path:'/gerente/empleados' , component: Empleados },
    {path:'/gerente/empleados/:nombre_prod' , component: Empleados, props:true },
    {path:'/conocenos' , component: Conocenos },
    {path:'/login' , component: Login },
    {path:'/empleado' , component: Empleados},
    {path:'/empleado/actividad', component: Actividad},
    {path:'/gerente/myhomepet', component: MyHomepet},
    {path:'/gerente/mascotas',component: Mascotas},
    {path:'/gerente/inventario', component: Inventario},
    {path:'/gerente/reservas', component: Reserva},
    {path:'/gerente/servicios', component: Servicio},
    {path:'/gerente/actividades/:nombre', component: Actividad, props:true},
    {path:'/gerente/clientes', component: Cliente},
    {path:'/NewFicha', component: NewFicha},
  ]
})
