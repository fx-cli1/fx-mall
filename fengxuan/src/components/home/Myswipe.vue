<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgsrclist" :key="item.id">
        <img :src="item.imgsrc" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    props:{
        imgsrclist:{
          type:Array,
          required: true
        }
    }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  width: 100%;
  height: 414px;
}
.my-swipe .van-swipe-item img{
  width: 100%;
  height: 100%;
}
</style>