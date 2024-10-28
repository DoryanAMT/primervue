<template>
    <div>
        <h1>Método filter</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                Numero: {{num}},
                doble:{{$filter.getNumeroDoble(num)}}
            </li>
        </ul>
        <ul>
            <li v-for="nombre in nombres" :key="nombre">
                {{$filter.mayuscula(nombre)}}
            </li>
        </ul>
    </div>

</template>

<script>

    export default{
        name: "MetodoFilter",
        data(){
            return{
                numero: [2,6,55,77,88,99,102],
                nombres: ["Adrian", "Licia", "Diana", "Carlos", "Antonia"]
            }
        }
    }
</script>

<style>
    @import './../assets/estilos.css';
</style>