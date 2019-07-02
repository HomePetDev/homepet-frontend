const state = {
  loading:false

}

const mutations ={
  setLoading(state, value){
    state.loading = value;
  }
}

const actions = {

}

export default {
  namespaced:true,
  state,mutations
}