<template>
  <div>
    <h1>Numero Par Impar</h1>
    <label>Introduce un numero: </label>
    <input type="number" v-model="numero" />
    <button @click="getEvaluarNumero()">Evaluar Numero</button>

    <h3 v-if="numero % 2 == 0">Par</h3>
    <h3 v-else>Impar</h3>

    <div id="comprobacion" v-html="html"></div>
    <div v-html="evaluarNumero"></div>
  </div>
</template>

<script>
export default {
  name: "NumeroParImpar",
  computed: {
    evaluarNumero(){
        var data = "";
        if (this.numero % 2 == 0) {
            data = "<h2 style='color:blue'>Par</h2>"
        }else{
            data = "<h2 style='color:green'>Imparar</h2>"
        }
        return data
    }
  },
  methods: {
    getEvaluarNumero() {
      var numero = this.numero;
      if (numero % 2 == 0) {
        this.html =
          "<h3 style='color:green'> El numero: " + numero + " es par</h3>";
      } else {
        this.html =
          "<h3 style='color:orange'> El numero: " + numero + " es impar</h3>";
      }
    },
  },

  data() {
    return {
      html: "",
      numero: 0,
    };
  },
};
</script>

<style>
@import "./../assets/estilos.css";
</style>