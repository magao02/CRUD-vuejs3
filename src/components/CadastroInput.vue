<template>
    <div class="input-container" >
            
        <label for={{tipo}}>{{tipo}}</label>
        <input type="text" id={{tipo}} name={{tipo}} v-model="campo" />
    </div>
</template>

<script>
    export default {
        name: "CadastroInput",
        props: {
         tipo:{
             type: String,
             default: "nome",
         }
     },


    }
</script>
<style scoped>

</style>