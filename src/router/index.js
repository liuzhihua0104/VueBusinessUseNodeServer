import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HeaderAndButton from "@/components/HeaderAndButton"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HeaderAndButton
    }
  ],
  linkActiveClass:"mui-active"
})
