<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>
<script lang="ts">

import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
body{
  background-color: #1E1E1E;
}
</style>
