<template>
  <div id="app" class="container">
    <myheader></myheader>
    <router-view></router-view>
  </div>
  
</template>

<script>
import myheader from './components/myheader'

export default {
  name: 'app',
  components: {
    myheader
  }
}
</script>
  
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
