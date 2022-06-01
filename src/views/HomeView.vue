<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 v-if="!this.$store.state.logged">Bem vindo visitante</h1>
    <h1 v-else >Bem vindo {{this.$store.state.nome}}</h1>
    <LoginForm v-if="!this.$store.state.logged"></LoginForm>
    <button v-else class="logout" @click="logout">Sair</button>
  </div>
</template>

<script>

import LoginForm from "@/components/LoginForm.vue";
export default {
  
  name: 'HomeView',
  components:{
    LoginForm,
  },
  methods:{
      logout(){
          this.$store.commit("logout")
      }
  }

}
</script>
<style scoped>
 .logout{
     color: red;
     height: 35px;
        line-height: 35px;
        box-sizing: border-box;
        background-color: white;
        border: 2px solid red

 }
</style>
