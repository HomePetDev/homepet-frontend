const state = {
  isLoading:false,
  isAlerting:false,
  alert:{
    msg:"",
    type:""
  },

}

const mutations = {
  setLoading(state, value){
    state.isLoading = value;
  },
  setAlert(state, alert){
    state.alert = {...alert};
  }
}
const actions = {
  async showAlert (context, alert ){
    context.commit('setAlert', alert);
    await setTimeout(()=>{context.commit("setAlert",{msg:"",type:""})}, 4000);
  },
  closeAlert(context){
    context.commit("setAlert", {msg:"", type:""})
  }

}

export default {
  namespaced:true,
  state,mutations, actions
}