<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Usuário: {{ nome }}</p>
        <p>Usuário invertido: {{ inverterNome() }}</p>
        <p>Idade do usuário <strong>{{ idade }}</strong></p>
        <p>Fone: <strong>{{ fone }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Chamada CallBack Pai)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            required: true,
            default: 'Tiago',
            /*
            default: function() {
                return 'Rocha'
            }
            */
        },
        idade: Number,
        fone: {
            type: Number,
            required: true,
            default: 992504589
        },
        reiniciarFn: Function
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            this.nome = 'Rocha'
            
            // Emitindo um evento customizado para o componente pai
            this.$emit('nomeMudou', this.nome)
        }
    },
    // Método do ciclo de vida
    created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
