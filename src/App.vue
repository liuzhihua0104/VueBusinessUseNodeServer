<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <router-view/>

    <!-- 底部tabbar是mui的组件 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/homecontainer">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/membercontainer">
        <!-- <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>-->
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="shopcarcontainer">
        <!-- <span class="mui-icon mui-icon-contact"></span> -->
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="searchcontainer">
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
</style>
