import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from "@/components/HomeContainer"; // 首页
import MemberContainer from "@/components/MemberContainer"; // 会员
import SearchContainer from "@/components/SearchContainer"; // 搜索
import ShopCarContainer from "@/components/ShopCarContainer"; // 购物车

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
