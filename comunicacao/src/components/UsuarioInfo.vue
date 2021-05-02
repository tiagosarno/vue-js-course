<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Usuário: {{ nome }}</p>
        <p>Usuário invertido: {{ inverterNome() }}</p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
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
        }
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
