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
      name: "home",
      component: HomeContainer
    },
    {
      path: '/membercontainer',
      name: "member",
      component: MemberContainer
    },
    {
      path: '/searchcontainer',
      name: "search",
      component: SearchContainer
    }, {
      path: '/shopcarcontainer',
      name: "shopcar",
      component: ShopCarContainer
    }
  ],
  linkActiveClass: "mui-active"
})
