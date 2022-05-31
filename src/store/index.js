import { createStore } from 'vuex'

export default createStore({
  state: {
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
    logged: false
  },
  getters: {
  },
  mutations: {
    dados(state, dado){
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
      state.bairro= dado.bairro,
      state.municipio= dado.municipio,
     state.pais= dado.pais
     state.logged = true
    },
    logout(state){
      state.logged = false
    }
  },
  actions: {
  },
  modules: {
  }
})
