import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gerente from './views/Gerente.vue'
import GerenteSignin from './views/GerenteSignin.vue'
import newHomepet from './views/newHomepet.vue'
import Empleado from './views/Empleado.vue'
import Conocenos from './views/Conocenos.vue'
import newEmpleado from './views/newEmpleado'
import Mascotas from './views/Mascotas'
import Cliente from './views/Cliente'
import newMascota from './views/newMascota'

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
    {path:'/gerente/homepet/new' , component: newHomepet },
    {path:'/gerente/empleados' , component: Empleado },
    {path:'/conocenos' , component: Conocenos },
    {path:'/gerente/empleados/crear' , component: newEmpleado },
    {path:'/gerente/mascotas' , component: Mascotas },
    {path:'/gerente/clientes' , component: Cliente },
    {path:'/gerente/mascotas/crear' , component: newMascota },
  ]
})
