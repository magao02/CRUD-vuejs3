<template>
  <div class="about">
    <h1>Está é a página de Editar</h1>
    <delete-button></delete-button>
    <CadastroForm requisicao="put" ></CadastroForm>

  </div>
</template>
<script>
import DeleteButton from '@/components/DeleteButton.vue'
import CadastroForm from "../components/CadastroForm.vue"

export default {
    name: "EditarView",
    components: {
      CadastroForm,
      DeleteButton,
},
    mounted() {

    },
  
}
</script>
