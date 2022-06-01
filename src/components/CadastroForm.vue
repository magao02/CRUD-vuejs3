<template>
    <div>
       <div class="erros" v-if="errors.length">
                <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>
        <form id="cadastro-form" @submit="checkForm">
            <div class="input-container">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="Nome completo"/>
            </div>
            <div class="input-container">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" v-model="email" placeholder="endereço de email" />
            </div>
            <div class="input-container">
                <label for="senha">senha</label>
                <input type="password" id="senha" name="senha" v-model="senha" placeholder="Senha" />
            </div>


            <div class="container-address">
                <div class="input-address"  >
                <label for="pais">país</label>
                <select v-model="pais" @click="verificaPais">
                    <option  v-for="paise in paises" :key="paise" :value="paise.nome.abreviado">
                    {{paise.nome.abreviado}}
                    </option>
                </select>
                </div>

                <div class="input-address" @click="pesquisarEstados">
                <label for="estado">Estado</label>

                <input v-if="pais !== 'Brasil'" type="text" id="estado" name="estado" v-model="estado" placeholder="estado" />
                <select v-else v-model="estado">
                    <option  v-for="estado in estados" :key="estado" :value="estado.nome">
                    {{estado.nome}}
                    </option>
                </select>
                </div>
                 <div class="input-address">
                <label for="municipio">Município</label>
                <input type="text" id="municipio" name="municipio" v-model="municipio" placeholder="municipio" />
                </div>
                <div class="input-address">
                <label for="cep">CEP</label>
                <input type="text" id="cep" name="cep" v-model="cep" placeholder="cep" />
                </div>
                <div class="input-address">
                <label for="rua">Rua</label>
                <input type="text" id="rua" name="rua" v-model="rua" placeholder="rua" />
                </div>
                <div class="input-address">
                <label for="numero">Número</label>
                <input type="number" id="numero" name="numero" v-model="numero" placeholder="numero" />
                </div>
                <div class="input-address">
                <label for="bairro">Bairro</label>
                <input type="text" id="bairro" name="bairro" v-model="bairro" placeholder="bairro" />
                </div>
                 <div class="input-address">
                <label for="complemento">Complemento</label>
                <input type="text" id="complemento" name="complemento" v-model="complemento" placeholder="complemento" />
                </div>
            </div>


            <div class="input-container">
                <label for="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" v-model="cpf" placeholder="apenas números" />
            </div>
            <div class="input-container">
                <label for="pis">PIS</label>
                <input type="text" id="pis" name="pis" v-model="pis" placeholder= "Apenas numeros" />
            </div>
            
             <div class="input-container">
                <input type="submit" id="enviar" name="enviar" value="enviar"/>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "CadastroForm",
        data() {
            return {
            nome: "",
            email: "",
            senha: "",
            cpf: "",
            pis: "",
            estado: "",
            rua:"" ,
            cep: "",
            numero: "",
            complemento:"",
            bairro: "",
            municipio:"",
            pais: "",
            estados:[],
            errors: [],
            paises: [],
            }
        },
        mounted(){
            console.log(process.env.VUE_APP_SERVER_URI)
            axios.get("https://servicodados.ibge.gov.br/api/v1/paises/").then((res)=>{
                this.paises = res.data
            }).catch((err)=>{
                console.log(err)
                console.log("erro")
                    
            })
        },
        props:['requisicao'],

        methods:{
            
            pesquisarEstados(){
                axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/").then((res)=>{
                    this.estados = res.data
                }).catch((err)=>{
                    console.log(err)
                    console.log("erro")
                })
            },
            verificaPais(){
                if (this.pais === "Brasil") {
                    this.pesquisarEstados()
                }
            },
            checkForm(e){
                e.preventDefault();
                this.errors = [];

                if (!this.nome) {
                    this.errors.push('O nome é obrigatório.');
                }
                
                if (!this.email) {
                    this.errors.push('O Email é obrigatório.');
                }
                
                if (!this.senha) {
                    this.errors.push('A senha é obrigatória.');
                }
                
                if (!this.pais) {
                    this.errors.push('O país é obrigatório.');
                }

                if (!this.estado) {
                    this.errors.push('O estado é obrigatório.');
                }
                
                if (!this.municipio) {
                    this.errors.push('O bunicipío é obrigatório.');
                }

                if (!this.bairro) {
                    this.errors.push('O bairro é obrigatório.');
                }

                if (!this.rua) {
                    this.errors.push('A rua é obrigatória.');
                }

                if (!this.cep) {
                    this.errors.push('O CEP é obrigatório.');
                }
                if (this.cep.length !== 8 ) {
                    this.errors.push('O CEP é deve ter 11 digitos.');
                }
                if (!this.cpf) {
                    this.errors.push('O CPF é obrigatório.');
                }
                if (this.cpf.length !== 11 ) {
                    this.errors.push('O CPF é deve ter 11 digitos.');
                }
                if (!this.pis) {
                    this.errors.push('O PIS é obrigatório.');
                }
                if (this.pis.length !== 11 ) {
                    this.errors.push('O PIS é deve ter 11 digitos.');
                }
                if(this.errors.length){
                    e.preventDefault();
                    console.log(this.errors)

                }
                if(!this.errors.length){
                    this.cadastroUsuario()
                    e.preventDefault();
                }
                e.preventDefault();
                
            },
            cadastroUsuario(){
                const data = {
                    nome: this.nome,
                    email: this.email,
                    senha: this.senha,
                    cpf: this.cpf,
                    pis:this.pis,
                    estado:this.estado,
                    rua: this.rua,
                    cep:this.cep,
                    numero:this.numero,
                    complemento:this.complemento,
                    bairro:this.bairro,
                    municipio:this.municipio,
                    pais: this.pais,

                }
                if(this.requisicao === 'post'){
                    this.cadastrar(data)
                }
                if(this.requisicao === 'put'){
                    this.editar(data)
                }
                


            },
            cadastrar(data){
               axios.post(`${process.env.VUE_APP_SERVER_URI}/cadastrar`,data)
                .then((res) => {
                    console.log(res)
                    this.$router.push('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    // ..
                });
            },
            editar(data){
               const headers ={
                    headers: {
                        'Authorization': `Bearer ${this.$store.state}` 
                    }}
               axios.put(`${process.env.VUE_APP_SERVER_URI}/usuario/${this.$store.state.id}`,data,headers)
                .then((res) => {
                    this.$store.commit("dados", res.data.usuarios)
                    this.$router.push('/')

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    // ..
                });
            
            
}


            
            
            
        }
        

    }
</script>
<style scoped>
    #cadastro-form{
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
    .erros{
        max-width: 700px;
        margin: 0 auto;
    }
    ul li{
        color: red;
        text-decoration: none;
        list-style-type: none
        
    }


</style>