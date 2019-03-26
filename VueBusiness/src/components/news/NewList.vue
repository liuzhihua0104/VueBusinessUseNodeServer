<template>
  <div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <a class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h6>{{item.title}}</h6> 
            <h7 class="mui-ellipsis">{{item.zhaiyao}}</h7>
            <div>
              <span>添加时间：{{item.add_time}}</span>
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
</style>


