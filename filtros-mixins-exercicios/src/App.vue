<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<h2>{{ usuarioLogado }}</h2>
		<hr />
		<p>{{ cpfAlunoString | cpfString | inverter }}</p>
		<p>{{ cpfAlunoInteger | cpfInteger | inverter }}</p>
		<input type="text" :value="cpfAlunoString | cpfString" />
		<hr />
		<Frutas />
		<hr />
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add" />
		</div>
	</div>
</template>

<script>
import frutasMixin from './FrutasMixin'
import usuarioMixin from './UsuarioMixin'
import Frutas from './Frutas.vue'

export default {
	components: { Frutas },
	mixins: [frutasMixin, usuarioMixin],
	data(){
		return {
			cpfAlunoString: '91107679168',
			cpfAlunoInteger: 91107679168,
			frutas: ['abacate']
		}
	},
	filters: {
		cpfString(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		},
		cpfInteger(valor){
			const arr = `${valor}`.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
    created(){
        console.log('Created - App VUE!')
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
input {
	font-size: 2.5rem;
}
</style>
