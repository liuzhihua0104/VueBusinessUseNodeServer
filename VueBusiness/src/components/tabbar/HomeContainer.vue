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

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li
        v-for="item in gird"
        :key="item.url"
        class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
      >
        <router-link :to="{name:item.name}">
          <img :src="item.url">
          <div class="mui-media-body">{{item.title}}</div>
        </router-link>
      </li>
    
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [],
      gird: [
        { title: "新闻资讯", url: require("../../images/menu1.png"),name:"newlist" },
        { title: "图片分享", url: require("../../images/menu2.png"),name:"photoshare" },
        { title: "商品购买", url: require("../../images/menu3.png"),name:"buygoods" },
        { title: "留言反馈", url: require("../../images/menu4.png"),name:"leaveMessage" },
        { title: "视频专区", url: require("../../images/menu5.png"),name:"videozone" },
        { title: "联系我们", url: require("../../images/menu6.png"),name:"contactus"}
      ]
    };
  },
  created() {
    // console.log(this.urlApi);
    this.$get(this.urlApi.homeImgUrl).then(res => {
      this.list = res.data;
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

    // 九宫格
  }

  ul{
    font-size:14px;
    background: #fff;
    li{
      img{
        width:60px;
      }
    }
  }
}
</style>
