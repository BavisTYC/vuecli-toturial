# addComponent

> Vue-cli新增組件

## Build Setup

``` bash
# add 2 component /src/components
HelloWorld.vue, component02.vue

# edit App.vue
<template>
  <div>
    ...
    <HelloWorld></HelloWorld>
    <component02></component02>
  </div>
</template>

# import component
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


# run web tests
npm run dev

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
