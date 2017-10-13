<template>
    <div class="myheader navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">{{msg}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link to="/">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home </a>
          </li>
          </router-link>
          <router-link to="/content">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          </router-link>
          <router-link to="/form">
          <li class="nav-item">
            <a class="nav-link" href="#">Form</a>
          </li>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      msg: 'Bootstrap Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
