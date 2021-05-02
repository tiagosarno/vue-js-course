<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário <strong>{{ idade }}</strong></p>
        <p>Fone: <strong>{{ fone }}</strong></p>
        <button @click="alterarIdade">Alterar Idade (Pai + Irmãos)</button>
        <button @click="mudarFone">Zerar Fones (Callback Pai)</button>
    </div>
</template>

<script>
export default {
    props: {
        idade: Number,
        fone: Number,
        mudarFone: Function
    },
    methods: {
        alterarIdade(){
            this.idade = 40
            this.$emit('idadeMudou', this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
