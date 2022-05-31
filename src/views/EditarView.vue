<template>
  <div class="about">
    <h1>Está é a página de Editar</h1>
    <CadastroForm ></CadastroForm>

  </div>
</template>
<script>
import CadastroForm from "../components/CadastroForm.vue"

export default {
        name: "EditarView",
        components: {
    CadastroForm,
},
        mounted() {
          console.log(this.$store.state.nome)
          
        },
  
}
</script>
