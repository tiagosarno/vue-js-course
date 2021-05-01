<template>
  <v-app>
    <Navigation />
    <AppBar />
    <Body />
    <Footer />
  </v-app>
</template>

<script>
import Navigation from '../components/template/Navigation.vue'
import AppBar from '../components/template/AppBar.vue'
import Footer from '../components/template/Footer.vue'
import Body from '../views/Body.vue' 

export default {
  components: { 
    Navigation,
    AppBar,
    Footer,
    Body
  }
}
</script>
