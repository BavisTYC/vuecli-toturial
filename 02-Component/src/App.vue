<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <HelloWorld></HelloWorld>
    <component02></component02>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld'
import component02 from './components/component02'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Chapter 02. Components'
    }
  },
  components: {
    HelloWorld, component02
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
