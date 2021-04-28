new Vue({
	el: '#desafio',
	data: {
		estilo: 'destaque',
		encolher: 'encolher',
		aplicarC1: 'c1',
		novaClasseCSS: '',
		aplicarCSS: false,
		styleCSS: '',
		cor: '',
		width: 0,
	},
	computed: {
		
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				if (this.estilo == 'destaque') {
					this.estilo = 'encolher'
				}
				else {
					this.estilo = 'destaque'
				}
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		},
		setarCSS(event){
			if (event.target.value == "false"){
				this.aplicarCSS = false
			}
			else if (event.target.value == "true"){
				this.aplicarCSS = true
			}
		}
	}
})
