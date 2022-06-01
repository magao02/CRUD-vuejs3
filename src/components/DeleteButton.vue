<template>
    <button  class="logout" @click="deleteUser">Deletar usuário</button>
</template>
<script>
import axios from "axios";
export default {
    name: 'HomeView',
    methods:{
      deleteUser(){
        const headers ={
            headers: {
                'Authorization': `Bearer ${this.$store.state.token}` 
            }}
            axios.delete(`${process.env.VUE_APP_SERVER_URI}/usuario/${this.$store.state.id}`,headers)
            .then(() => {
                    this.$store.commit("logout")
                    this.$router.push('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
          
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
    border: 2px solid red;
    margin-bottom: 30px;
    cursor: pointer;

 }
</style>