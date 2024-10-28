<template>
    <div>
        <h1>Directivas Component</h1>
        <h1>
            <!-- MEDIANTE $ PODEMOS ACCEDER A LAS VARIABLES DE DATA -->
            {{$data}}
        </h1>
        <label>Introduzca un número: </label>
        <input type="text" v-model="numero"/>
        <h2 v-if="numero > 0 " style="color:green">
            POSITIVO
        </h2>
        <h2 v-else-if="numero < 0" style="color:red">
            NEGATIVO
        </h2>
        <h2 v-else style="color:blue">
            CERO
        </h2>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>
    </div>

</template>

<script>

    export default{
        name: "DirectivasComponent",
        data(){
            return{
                numero: 10,
                nombre: "Alumno",
                edad: 25,
                series: ["Futurama", "Suits", "Los Simpson","Padre de familia", "Big Bang Theory", "La que se avecina"]
            }
        }
    }
</script>

<style>
    @import './../assets/estilos.css';
</style>