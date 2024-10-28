<template>
    <div>
        <h1>Mi primera App de Vue</h1>
        <h2>Su nombre es {{nombre}}</h2>
        <h2>Su numero es {{numero}}</h2>
        <img src="./../assets/opel-corsa-dinamismo-carretera.jpg"/>
    </div>

</template>

<script>
    //  ESTO ES CODIGO JS (ESPECIAL)
    //  CADA COMPONENT QUE CREEMOS SIMPRE DEBEMOS EXPORTARLO
    //  CON UN name
    export default {
        name: "HolaMundo",
        // DEBEMOS DECALRA LAS VARIABLE PARA EL DIBUJO
        //  LAS VARIALBES SON DECLARADAS CON FORMATO JSON DENTRO DE 
        //  UN return
        data () {
            return {
            nombre: "alumno",
            numero: 14,
            miArray: [],
            objeto: {}
        }
        }
    }

</script>

<style>
    h1{color: fuchsia;}
    @import './../assets/estilos.css'
</style>