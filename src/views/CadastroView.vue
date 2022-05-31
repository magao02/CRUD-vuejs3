<template>
   <div>
     <h1>Cadastre-se</h1>
     <cadastro-form></cadastro-form>
     
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
            finalizarTarefa(tempoDecorrido)  {
                console.log(tempoDecorrido);
                console.log(this.descricao);
                this.descricao = '';
            }
        }
        
    };
  
</script >