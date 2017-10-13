# Simple Page by bootstrap

> 新增bootstrap簡單頁面

## Build Setup

``` bash
# add three components
myheader, mysliderbar, mycontect

# edit App.vue 
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
  components: {
    myheader, myslider, mycontent
  }
}
</script>

# run web tests
npm run dev

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
