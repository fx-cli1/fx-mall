<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import bus from "../bus"
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  },
  created(){
    bus.$emit("changeFlag",false);
  },
  destoryed(){
    bus.$emit("changeFlag",true);
  }
};
</script>

<style>
</style>