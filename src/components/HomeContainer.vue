<template>
  <div class="container-box">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="home-swipe">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <a :href="item.url">
          <img :src="item.img" :alt="item.url">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      list: []
    };
  },
  created() {
    // 发送请求 http://www.liulongbin.top:3005/api/getlunbo
    this.$axios
      .get("http://www.liulongbin.top:3005/api/getlunbo")
      .then(data => {
        if (
          data.data.status == 0 &&
          data.data.message &&
          data.data.message.length > 0
        ) {
          this.list = data.data.message;
        }
      })
      .catch(err => {
        console.log(err);
      });
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
    width: 100%;
    background: grey;
    .mint-swipe-item {
      width: 100%;
      height: 100%;
      a {
        display: block;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
