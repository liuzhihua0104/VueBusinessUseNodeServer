<template>
  <div class="hello">
    <button type="button" class="mui-btn">默认</button>
    <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
    <button type="button" class="mui-btn mui-btn-success">绿色</button>
    <button type="button" class="mui-btn mui-btn-warning">黄色</button>
    <button type="button" class="mui-btn mui-btn-danger">红色</button>
    <button type="button" class="mui-btn mui-btn-royal">紫色</button>
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
<style scoped>
</style>
