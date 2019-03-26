<template>
  <div>新闻列表</div>
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
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });
  }
};
</script>
<style lang="less" scoped>
</style>


