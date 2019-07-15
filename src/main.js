import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'bootswatch/dist/flatly/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import {faPlus , faTrash, faPencilRuler , faSignOutAlt, faInfo, faTimes, faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faTrash, faPencilRuler , faSignOutAlt ,faInfo, faTimes , faPencilAlt  )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
