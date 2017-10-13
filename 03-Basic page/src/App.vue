<template>
  <div id="app" class="container">
    <myheader></myheader>
    <div class="row">
      <div class="col-xl-3"><myslider></myslider></div>
      <div class="col-xl-9"><mycontent></mycontent></div>
    </div>
  </div>
  
</template>

<script>
import myheader from './components/myheader'
import myslider from './components/myslider'
import mycontent from './components/mycontent'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Chapter 02. Components'
    }
  },
  components: {
    myheader, myslider, mycontent
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
