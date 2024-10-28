<template>
    <div>
        <h1>Ciclo Vida Events</h1>
        <h2 style="colo:blue">{{saludo}}</h2>
        <button @click="cambiarSaludo()">Cambiar Saludo</button>

    </div>

</template>

<script>

    export default{
        name: "CicloVida",
        data (){
            return{
                saludo: "Hoy es lunes..."
            }
        },
        methods:{
            //  EN ESTA ZONA INLUITEMOS NUESTRO METODOS PERSONALIZADOS
            cambiarSaludo(){
                //  SE UTILIZAR LA PALABRA CLAVE this PARA LLAMAR A LAS
                //  VARIABLES DE data()
                this.saludo = "Y mañana martes...."
            }
        },
        mounted(){
            console.log("Componente montado");
        },
        unmounted(){
            console.log("Componente destruido");
        },
        updated(){
            console.log("Componente actualizado");
        },
        created(){
            console.log("Componente creado");
        }
    }
</script>

<style>
    
</style>