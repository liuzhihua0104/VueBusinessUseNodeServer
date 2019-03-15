// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./mui/dist/css/mui.min.css"; 
import "./mui/dist/css/icons-extra.css"; //引入mui的图标css

Vue.config.productionTip = false


// 按需引入minu-ui组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
