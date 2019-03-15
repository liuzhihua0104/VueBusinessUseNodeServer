<template>
  <div class="container-box">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="home-swipe">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container-box {
  width: 100%;
  height: 100%;
  .home-swipe {
    height: 200px;
    width:100%;
    background: grey;
  }
}
</style>
