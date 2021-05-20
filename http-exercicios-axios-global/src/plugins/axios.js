import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-580d7-default-rtdb.firebaseio.com/'

// Declaração global para a aplicação
// axios.defaults.headers.common['Authorization'] = 'abc123'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios

        Vue.prototype.$http.interceptors.request.use(config => {
            // console.log(config.method)
            // if(config.method == 'post') {
            //     // CODE
            // }
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data){
            //     array.push({ id: chave, ...res.data[chave]})
            // }
            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})

// Golbal App Axios