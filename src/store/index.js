import { createStore } from 'vuex'

export default createStore({
  state: {
    id: null,
    nome: null,
    email: null,
    senha: null,
    cpf: null,
    pis: null,
    estado: null,
    rua: null,
    cep: null,
    numero: null,
    complemento:null,
    bairro:null,
    municipio:null,
    pais:null,
    logged: false,
    token:null
  },
  getters: {
  },
  mutations: {
    dados(state, dado){
      state.id = dado.id
      state.nome= dado.nome,
      state.email= dado.email,
      state.senha= dado.senha,
      state.cpf= dado.cpf,
      state.pis= dado.pis,
      state.estado= dado.estado,
      state.rua= dado.rua,
      state.cep= dado.cep,
      state.numero= dado.numero,
      state.complemento= dado.complemento,
      state.municipio= dado.municipio,
      state.pais= dado.pais,
      state.logged = true
    },

    logout(state){
      state.id= null,
      state.nome= null,
      state.email= null,
      state.senha= null,
      state.cpf= null,
      state.pis= null,
      state.estado= null,
      state.rua= null,
      state.cep= null,
      state.numero= null,
      state.complemento=null,
      state.bairro=null,
      state.municipio=null,
      state.pais=null,
      state.logged= false,
      state.token=null
    },

    token(state,token){
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  }
})
