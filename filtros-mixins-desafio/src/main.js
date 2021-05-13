import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contarPalavras', function(valor){
	// Minha implementação
	let palavras = valor.split(' ')
	let texto = ''
	palavras.forEach(palavra => {
		let length = palavra.length
		texto = texto + palavra + '(' + length + ') '
	})
	return texto

	// Implementação do professor
	// return valor.split(' ').map(p => `${p} (${p.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
