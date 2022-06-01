<template>
   <div>
     <h1>Cadastre-se</h1>
     <cadastro-form requisicao="post"></cadastro-form>
     
   </div>
</template>

<script >
  import CadastroForm from "../components/CadastroForm.vue"
  export default {
  components: {
      CadastroForm
    },
        name: "CadastroView",
        data(){
            return{
                descricao: ''
            }
        },
        methods:{
        }
        
    };
  
</script >