new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar(){
            alert('Clicado!');
        },
        exibirValor(event){
            this.valor = event.target.value
        }
    }
})