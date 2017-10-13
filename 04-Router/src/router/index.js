// index.js
import Vue from 'vue'
import Router from 'vue-router'
import myslider from '@/components/myslider'
// import xxx from  '@/components/xxx' 中的@表示src
// 因为webpack.base.conf中别名已設置==> alias: {'@': resolve('src')}
import mycontent from '@/components/mycontent'
import myform from '@/components/myform'
Vue.use(Router)
export default new Router({
  mode: 'history',  // 使用history防止url中出現#
  routes: [
    {
      path: '/',
      name: 'Home',
      component: myslider
    },
    {
      path: '/content',
      name: 'Content',
      component: mycontent
    },
    {
      path: '/form',
      name: 'Form',
      component: myform
    }

  ]
})
