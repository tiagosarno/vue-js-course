import Vue from 'vue'

export default new Vue({
    // usuarioSelecionado é o identificador deste barramento
    methods: {
        setUsuarioSelecionado(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },
        onUsuarioSelecionado(callback){
            this.$on('usuarioSelecionado', callback)
        }
    }
})