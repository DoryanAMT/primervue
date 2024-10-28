import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CineComponent from './components/CineComponent.vue';
import CicloVida from './components/CicloVida.vue'
import DirectivasComponent from './components/DirectivasComponent.vue'
import PropiedadConmutada from './components/PropiedadConmutada.vue'
import NumeroParImpar from './components/NumeroParImpar.vue'
import MetodoFilter from './components/MetodoFilter.vue'

//  CREAMOS UNA CONSTANTE ARRAY PARA LAS RUTAS
const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/musica", component: MusicaComponent
    },
    {
        path: "/cine", component: CineComponent
    },
    {
        path: "/ciclovida", component: CicloVida
    },
    {
        path: "/directivas", component: DirectivasComponent
    },
    {
        path: "/propiedadconmutada", component: PropiedadConmutada
    },
    {
        path: "/numeroparimpar", component: NumeroParImpar
    },
    {
        path: "/metodofilter", component: MetodoFilter
    },
]


//  CREAREMOS UNA COSNTANTE PARA EL HISTORIAL E INCLUIR EL ARRAY DE RUTAS
//  DICHO NOMBRE DE CONSTATE SERA EL QUE UTILIZAREMOS DENTRO DE Mani.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//  POR ULTIMO, EXPORTAMOS LA CONSTANTE router PARA SER UTILIZDA
//  EN App

export default router;

