<template>
  <div class="usuario-detalhe">
      <h3>Usuario Detalhe</h3>
      <hr />
      <p><strong>Código: </strong>{{ id }}</p>
      <router-link tag="button" primario
        :to="{ name: 'editarUsuario', params: { id },
             query: { completo: true, lingua: 'pt-BR'},
             hash: '#rodape' }">
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