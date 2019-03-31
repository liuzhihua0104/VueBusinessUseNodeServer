<template>
  <div class="container">
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <router-link class="mui-navigate-right" :to="{name:'newDetail',params:{id:item.id}}">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p class="new-title">{{item.title|sub}}</p>
            <p class="mui-ellipsis">{{item.zhaiyao}}</p>
            <div class="detail-msg">
              <span>{{item.add_time|dateFormat("YYYY-MM-DD")}}</span>
              <span>点击次数{{item.click}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Indicator } from "mint-ui";

export default {
  data() {
    return {
      newList: []
    };
  },
  created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });
    this.$get(this.urlApi.newListUrl, {})
      .then(res => {
        this.newList = res.data;
        Indicator.close();
      })
      .catch(err => {
        console.log(err);
        Indicator.close();
      });
  },
  filters: {
    sub: function(str) {
      return str.substring(0, 15);
    }
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
            font-size: 12px;
            &.new-title {
              color: #000;
              text-align: left;
            }
          }
          .detail-msg {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>


