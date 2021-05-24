<template>
  <div class="usuario-editar">
      <h3>Usuario Editar</h3>
      <hr />
      <p><strong>Código via Props: </strong>{{ id }}</p>
      <p><strong>Código via $route: </strong>{{ $route.params.id }}</p>
      <p><strong>Query Param: Completo - </strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
      <p><strong>Query Param: Lingua - </strong>{{ $route.query.lingua }}</p>
      <hr />
      <button primario @click="confirmou = true">
        Confirmar
      </button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data(){
    return{
      confirmou: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if(this.confirmou) {
      next()
    }
    else{
      if(confirm('Tem Certeza?')) {
        next()
      }
      else {
        next(false)
      }
    }
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