<template>
  <div class="usuario-editar">
      <h3>Usuario Editar</h3>
      <hr />
      <p><strong>Código via Props: </strong>{{ id }}</p>
      <p><strong>Código via $route: </strong>{{ $route.params.id }}</p>
      <p><strong>Query Param: Completo - </strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
      <p><strong>Query Param: Lingua - </strong>{{ $route.query.lingua }}</p>
      <div id="rodape">
        <h3>Curso Vue</h3>
      </div>
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
  #rodape{
    margin-top: 1000px;
  }
</style>