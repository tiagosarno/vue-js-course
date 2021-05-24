import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'

import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'

// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioEditar from './components/usuario/UsuarioEditar'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const router = new Router({
    mode: 'history',
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    },{
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { 
                path: ':id', 
                component: UsuarioDetalhe, 
                props: true,
                beforeEnter: (to, from , next) => {
                    console.log('Antes rota Usuário Detalhe..')
                    next()
                }
            },
            { 
                path: ':id/editar', 
                component: UsuarioEditar, 
                props: true, 
                name: 'editarUsuario' 
            },
        ]
    }]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas > Global')
    next()

    // if(to.path != "/usuario"){
    //     next('/usuario')
    // }
    // else{
    //     next()
    // }

    // next(false) // Aborta a navegação
})

export default router