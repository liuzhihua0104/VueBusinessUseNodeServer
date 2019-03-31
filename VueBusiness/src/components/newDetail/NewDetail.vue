<template>
  <div class="container">
    <h4>{{newDetail.title}}</h4>
    <div class="detail-des">
      <span>{{newDetail.add_time|dateFormat}}</span>
      <span>点击次数：{{newDetail.click}}</span>
    </div>
    <div v-html="newDetail.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newDetail: {}
    };
  },
  created() {
    console.log(this.$route.params.id);
    let that = this;
    this.$get("/api/getnew/" + this.$route.params.id)
      .then(res => {
        console.log(res);
        that.newDetail = res.data[0];
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  .detail-des{
    display: flex;
    justify-content: space-between;
  }
}
</style>


