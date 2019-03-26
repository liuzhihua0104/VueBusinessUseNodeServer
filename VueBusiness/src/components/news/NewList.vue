<template>
  <div class="container">
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <a class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p>{{item.title}}</p>
            <p class="mui-ellipsis">{{item.zhaiyao}}</p>
            <div class="detail-msg">
              <span>{{item.add_time|dateFormat("YYYY-MM-DD")}}</span>
              <span>点击次数{{item.click}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newList: []
    };
  },
  created() {
    this.$get(this.urlApi.newListUrl, {})
      .then(res => {
        // console.log(res)
        this.newList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="less" scoped>
.container {
  // width: 100%;
  // height: 100%;
  ul {
    li {
      a {
        .mui-media-body {
          p {
            padding: 0;
          }
          .detail-msg {
            display: flex;
            justify-content:space-between;
          }
        }
      }
    }
  }
}
</style>


