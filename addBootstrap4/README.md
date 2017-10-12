# addbootstrap4

> Vue-cli專案加入bootstrap4

## Build Setup

``` bash
# 建立專案
vue init webpack
npm install

# 安裝相關套件
npm install bootstrap@4.0.0-beta jquery popper.js --save-dev

# 修改 main.js
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

# 修改 webpack.base.conf.js
plugins: [new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery',
    Popper: ['popper.js', 'default']
  })]

# 修改 App.vue
導入Bootstrap4元件

# run web tests
npm run dev

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
