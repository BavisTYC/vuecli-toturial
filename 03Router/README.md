# Vue-cli Router

> 建立簡單路由範例

## Build Setup

``` bash
# 安裝 vue-router 並存入package.json
npm install vue-router --save-dev

# 新增 4 components
myheader, myslider, mycontent, myform

# 編輯 main.js 載入 router 配置文件
import router from './router'

# 編輯 index.js (/src/router/index.js)
Vue.use(Router)
export default new Router

# 編輯 App.vue 確認router-view 載入位置
<router-view></router-view>

# 編輯 myheader.vue 設定選項點擊動作(router-link)
<router-link to="/">
   <li class="nav-item active">
     <a class="nav-link" href="#">Home </a>
   </li>
</router-link>

# run web tests
npm run dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
