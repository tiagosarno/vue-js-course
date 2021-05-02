<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }} - Idade: {{ idade }} - {{ fone }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome" 
                :idade="idade"
                :fone="fone"
                @nomeMudou="nome = $event"
                :reiniciarFn="reiniciarNome"
            />
            <app-usuario-editar
                :idade="idade" 
                :fone="fone"
                @idadeMudou="idade = $event * 2"
                :mudarFone="zerarFone"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    data(){
        return{
            nome: 'Tiago Rocha Sarno',
            idade: 21,
            fone: 6292708905
        }
    },
    components: { AppUsuarioInfo, AppUsuarioEditar },
    methods: {
        alterarNome(){
            this.nome = 'Aline Dias'
        },
        reiniciarNome(){
            this.nome = 'Tiago Rocha Sarno'
        },
        zerarFone(){
            this.fone = 0
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
