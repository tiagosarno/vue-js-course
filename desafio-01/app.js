new Vue({
    el: '#desafio',
    data: {
        nome: 'Tiago Rocha Sarno',
        idade: 40,
        file: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2018/11/23842670_m-810x304.jpg.webp',
    },
    methods: {
        random(){
            return Math.random();
        },
    }
})