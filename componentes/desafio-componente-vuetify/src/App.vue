<template>
  <v-app>
    <Navigation />
    <AppBar />
    <Body />
    <Footer />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue' 

export default {
  components: { 
    Navigation: Navigation,
    AppBar: AppBar,
    Footer: Footer,
    Body: Body
  }
}
</script>
