<template>
  <div>
    <h1>Propiedades Conmutada</h1>
    <button @click="getJuegosAzules()">Juegos Azules</button>
    <!-- <ul>
            <li v-for="juego in juegosRojos" :key="juego" v-html="juego">
            </li>
        </ul> -->
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  name: "PropiedadConmutada",
  methods: {
    getJuegosAzules() {
      // EL METODO NO DEVUELVE NADA, NECESITAMOS TENER UN DIBUJO
      for (var juego of this.juegos) {
        this.html += "<h4 style='color:blue'>" + juego + "</h4>";
      }
    },
  },
  computed: {
    // UNA PROPIEDA COMNUTADA SIMEPRE DEVUELVE VALORES Y NO PUEDE RECIBIR PARAMETROS
    juegosRojos() {
      //  VAMOS A DEVOLVER TODOS LOS JUEGOS CON
      //  UN FORMATO DE COLOR ROJO
      var datos = this.juegos;
      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = "<span style='color:green'>" + juego + "</span>";
        datos[i] = juego;
      }
      return datos;
    },
  },
  data() {
    return {
      html: "",
      juegos: [
        "Parchis",
        "Canicas",
        "Luz roja, luz verda",
        "La comba",
        "La galleta",
        "Polis y cacos",
        "Fútbol",
        "Baloncesto",
        "Hokey",
      ],
    };
  },
};
</script>

<style>
@import "./../assets/estilos.css";
</style>