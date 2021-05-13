export default {
    computed: {
        compEspacoPorVirgula(){
            return 'Computed Mixin: ' + this.ex1.split(' ').join(',')
        },
        compContarPalavras(){
            let palavras = this.ex1.split(' ')
            let texto = ''
            palavras.forEach(palavra => {
                let length = palavra.length
                texto = texto + palavra + '(' + length + ') '
            })
            return 'Computed Mixin: ' + texto
        }
    }
}