new Vue({
	el: '#desafio',
	textoBotao: 'Alternar',
	data: {
		exibirPrioridade: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livros: [
			{
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '1'
			},
			{
			titulo: 'O Senhor dos Anéis 2',
			autor: 'J.R.R. Tolkiens',
			volume: '2'
			},
			{
			titulo: 'O Senhor dos Anéis 3',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
			},
		],
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
	},
	computed: {
		textoBotao(){
			return this.exibirPrioridade ? 'Alternar' : 'Retornar'
		}
	}
});
