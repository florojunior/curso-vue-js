<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
      <input v-bind:value="teste" v-on:input="testarComunicacao()"></input> <p>{{teste}}</p>
      <button @click="alterarIdade">Alterar Idade</button>
      <button @click="callBackTeste()">Callback Teste</button>
    </div>
</template>

<script>
  import barramento from '@/barramento'

  export default {
  props: {
    idade: Number,
    callBackTeste: Function
  },
  data(){
  return {
  teste: 'Inicio'
  }
  },
  methods: {
  alterarIdade() {
  this.idade += 1
  barramento.alterarIdade(this.idade)
  },
  testarComunicacao() {
    console.log(this.teste);
    this.$emit('testantoComunicacao',this.teste);
  }
  }
  }
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
