import { createApp } from 'vue'
import App from './App.vue'
//  POR ULTIMO DEBEMOS IMPORTAR ROUTER PARA PODER USARLO

import router from './Router.js'
//  COMENZAMOS CREANDO NUESTRA CREACION DE APLICAION EN UNA
//  VARIABLE
var app = createApp(App)

app.config.globalProperties.$filters = {
    // CREAMOS DOS METODOS QUE REICIBIARAN PARAMETROS
    //  Y DEVOLVERAN UN CODIGO
    mayuscula(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble (numero) {
        return numero*2
    }
}
//  SE UTILIZAR .use(router)
app.use(router).mount('#app')





