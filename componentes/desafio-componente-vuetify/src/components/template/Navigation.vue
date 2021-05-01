<template>
  <v-navigation-drawer app>
      <ToolBar />      
      <v-divider></v-divider>
      <List />
    </v-navigation-drawer>
</template>

<script>
import ToolBar from './ToolBar.vue'
import List from './List.vue'

export default {
    components: { 
      ToolBar, 
      List 
    }
}
</script>