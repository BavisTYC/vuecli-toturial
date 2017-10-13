<template>
    <div class="myslider jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-3">{{msg}}</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myslider',
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
