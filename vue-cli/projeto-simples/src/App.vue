<template>
  <div id="app">
      {{ titulo }}
      <button @click="titulo += '#'">Alterar</button>
  </div>  
</template>

<script>
export default {
  data: function() {
    return {
      titulo: 'Curso TOP Vue.js'
    }
  }
}
</script>

<style>
  #app {
    background-color: cadetblue;
    color: white;
    padding: 20px;
    border-radius: 8px;
  }
</style>