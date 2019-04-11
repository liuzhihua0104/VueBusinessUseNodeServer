// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js';//淘宝rem适配方案
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css"; //引入mui的图标css
import 'mint-ui/lib/style.css'

// 项目中引入并安装animate.css
import animated from "animate.css";
Vue.use(animated)

Vue.config.productionTip = false


// 按需引入minu-ui组件
import { Header, Swipe, SwipeItem,  Button } from 'mint-ui';
Vue.component(Header.name, Header); // 顶部固定栏
Vue.component(Swipe.name, Swipe); // 轮播图
Vue.component(SwipeItem.name, SwipeItem); // 轮播图item
Vue.component(Button.name, Button); // button按钮

// 引入axios并挂在到vue的原型对象上面
// import axios from "axios";
// Vue.prototype.$axios = axios;

import urlApi from "./utils/urlApi";


// import axios from 'axios'
import { post, get, patch, put } from './utils/http'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.prototype.urlApi = urlApi;


// 全局过滤器
import moment from "moment";
Vue.prototype.$moment = moment;

Vue.filter("dateFormat", function (dateString, format = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateString).format(format)
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



