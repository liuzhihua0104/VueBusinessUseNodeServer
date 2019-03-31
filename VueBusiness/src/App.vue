<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <transition mode="out-in">
      <router-view class="animated router-view-box"/>
    </transition>
    <!-- 底部tabbar是mui的组件 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" :to="{name:'home'}">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'member'}">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'shopcar'}">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'search'}">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

html,
body {
  width: 100%;
  height: 100%;
}

.router-view-box {
  padding-top: 40px;
  padding-bottom: 50.2px;
  width: 100%;
  height: 100%;
  overflow:scroll;
}

/* 进入之前 */
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

/* 离开之后 */
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.v-enter-to {
  opacity: 1;
}

/* 激活时 */

.v-enter-active,
.v-leave-active {
  transition: all 0.1s linear;
}
</style>
