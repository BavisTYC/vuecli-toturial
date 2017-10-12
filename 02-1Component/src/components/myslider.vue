<template>
    <div class="myslider list-group">
    <a href="#" class="list-group-item active">
        {{msg}}
    </a>
    <a href="#" class="list-group-item list-group-item-action">Home</a>
    <a href="#" class="list-group-item list-group-item-action">About</a>
    <a href="#" class="list-group-item list-group-item-action">Feature</a>
    </div>
</template>

<script>
export default {
  name: 'myslider',
  data () {
    return {
      msg: 'Jumbotron'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
