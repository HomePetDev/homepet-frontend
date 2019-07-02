import Vue from 'vue';
import Vuex from 'vuex';

// Importando otros modulos de store
import auth from "./auth";
import homepet from "./homepet";
import control from "./control";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth, homepet,control
  },
});