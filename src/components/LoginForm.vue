<template>
    <form id="login-form" @submit="login">
            <div class="input-container">
                <label for="email">Email</label>
                <input type="text" id="identificador" name="identificador" v-model="identificador" placeholder="email, CPF ou PIS" />
            </div>
            <div class="input-container">
                <label for="senha">senha</label>
                <input type="password" id="senha" name="senha" v-model="senha" placeholder="Senha" />
            </div>
            <div class="input-container">
                <input type="submit" id="enviar" name="enviar" value="enviar"/>
            </div>
        </form>
</template>
<script>
import axios from "axios";
export default {
    name: "LoginForm",
    data(){
        return{
            identificador: "",
            senha: ""
        }
    },
    methods:{
    login(e){

        e.preventDefault();
        axios.post("http://127.0.0.1:5000/login",{
            identificador: this.identificador,
            senha: this.senha
            }).then((res)=>{
            this.alteraState(e, res.data.access_token,res.data.id)

        }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    e.preventDefault();
                    // ..
                });

    },
    alteraState(e,token,id){
       axios.get(`http://127.0.0.1:5000/usuario/${id}`,{
           headers:{
               'Authorization': `Bearer ${token}`
           }
       }).then((res)=>{
            this.$store.commit("token",token)
            this.$store.commit("dados", res.data.usuarios)
          })
          e.preventDefault();
          
    }
  }
        
}
</script>

<style scoped>
#login-form{
        max-width: 700px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
    .input-address{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        width: calc((95% / 2));
        margin-right: 10px;
    }
    select{
        height: 35px;
        line-height: 35px;
        box-sizing: border-box;
    }
    .container-address{
        width: 100%;
        display: flex;
        margin-bottom: 10px;
        flex-wrap: wrap;
    }
    
    label{
        font-weight: bold;
        margin-bottom: 15px;
        align-items: left;
        text-align: left;
        padding: 5px 10px;
        border-left: 2px solid #42b983;
    }
    input{
        height: 35px;
        line-height: 35px;
        box-sizing: border-box;
    }

</style>