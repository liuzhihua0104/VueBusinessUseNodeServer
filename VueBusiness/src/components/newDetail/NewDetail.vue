<template>
  <div class="container">新闻详情页面{{this.$route.params.id}}</div>
</template>
<script>
export default {
  data() {
    return {
      html: ""
    };
  },
  created() {
    console.log(this.$route.params.id);
    // let that=this;
    this.$get("/api/getnew/" + this.$route.params.id)
      .then(res => {
        console.log(res);
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
}
</style>


