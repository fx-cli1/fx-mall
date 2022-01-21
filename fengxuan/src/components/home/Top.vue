<template>
  <div class="mytop">
    <van-swipe
      style="height: 50px; width: 100px"
      vertical
      :show-indicators="false"
      autoplay="3000"
    >
      <van-swipe-item>峰选1</van-swipe-item>
      <van-swipe-item>峰选2</van-swipe-item>
      <van-swipe-item>峰选3</van-swipe-item>
    </van-swipe>
    <div class="searchbtn">
      <span class="iconfont icon-fangdajing"></span>搜索商品名称
    </div>
    <span class="iconfont icon-wode-tianchong"></span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mytop {
  display: flex;
  align-items: center;
  background: rgb(242, 242, 242);
}
/deep/.van-swipe {
  font-weight: 700;
  /* background: #f00; */
}
.van-swipe-item {
  line-height: 90px;
  text-align: center;
  color: #f90;
}
.searchbtn {
  width: 400px;
  height: 70px;
  background: #fff;
  border-radius: 40px;
  margin-left: 20px;
  margin-right: 40px;
  padding-left: 40px;
  box-sizing: border-box;
  line-height: 70px;
  font-size: 30px;
  color: #ccc;
}
.icon-wode-tianchong{
  font-size: 55px;
  color: #ccc;
}
.icon-fangdajing{
  font-size: 35px;
  margin-right: 20px;
}
</style>