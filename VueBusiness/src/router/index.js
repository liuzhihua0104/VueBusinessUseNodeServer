import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from "@/components/tabbar/HomeContainer"; // 首页
import MemberContainer from "@/components/tabbar/MemberContainer"; // 会员
import SearchContainer from "@/components/tabbar/SearchContainer"; // 搜索
import ShopCarContainer from "@/components/tabbar/ShopCarContainer"; // 购物车

import NewList from "@/components/news/NewList"; // 购物车

Vue.use(Router)

// 路由守卫

// Router.router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
// })

// console.log(RouterVueRouter)
// Router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   console.log(to)
//   console.log(from)
//   next();
// })

let router = new Router({
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
    },

    {
      path: "/newlist",
      name: "newlist",
      component: NewList   //新闻列表
    }
  ],
  linkActiveClass: "mui-active"
})

// 给项目添加路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // console.log(to)
  // console.log(from)
  // console.log(router)
  next(); //括号中传参false就是不让走，也可以router.push("/home") 重定向


})

export default router;