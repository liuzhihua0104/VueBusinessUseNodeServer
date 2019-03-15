import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from "@/components/HomeContainer";
import MemberContainer from "@/components/MemberContainer";
import SearchContainer from "@/components/SearchContainer";
import ShopCarContainer from "@/components/ShopCarContainer";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/homecontainer"
    },
    {
      path: '/homecontainer',
      component: HomeContainer
    },
    {
      path: '/membercontainer',
      component: MemberContainer
    },
    {
      path: '/searchcontainer',
      component: SearchContainer
    }, {
      path: '/shopcarcontainer',
      component: ShopCarContainer
    }
  ],
  linkActiveClass: "mui-active"
})
