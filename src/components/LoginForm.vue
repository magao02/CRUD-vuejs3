<template>
    <form id="login-form" @submit="login">
            <div class="input-container">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" v-model="email" placeholder="endereço de email" />
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    name: "LoginForm",
    data(){
        return{
            email: "",
            senha: ""
        }
    },
    methods:{
    login(e){
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth,this.email,this.senha).then((data)=>{
            console.log(data);
            console.log("logado")
            this.alteraState(e)

        }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    e.preventDefault();
                    // ..
                });

    },
    alteraState(e){
       axios.get("http://127.0.0.1:5555/requisicao.json").then((res)=>{
            console.log(res.data)
            this.$store.commit("dados", res.data)

            console.log(this.$store.state.logged)
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