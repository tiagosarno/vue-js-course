<template>
  <div class="usuario-detalhe">
      <h3>Usuario Detalhe</h3>
      <hr />
      <p><strong>Código: </strong>{{ id }}</p>
      <router-link tag="button" primario
        :to="{ name: 'editarUsuario', params: { id },
             query: { completo: true, lingua: 'pt-BR'} }">
      <!-- <router-link tag="button" primario
        :to="`/usuario/${id}/editar`"> -->
      <!-- <router-link tag="button" primario
        :to="`/usuario/${$route.params.id}/editar`"> -->
          Editar
      </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  beforeRouteEnter(to, from, next){
    console.log('Interceptando rota dentro do componente Usuário Detalhe')
    next(vm => {
      // console.log(`ID: ${vm.id}`)

      // Exemplo validação de autenticação no componente
      const autenticado = true
      autenticado ? next() : next(false)
    })
  }
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
}
</script>

<style>

</style>