<template>
  <div>
    <van-nav-bar
      title="个人中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="地址管理" is-link to="/location" />
    <van-cell title="修改密码" is-link to="/changePwd" />
    <van-button
      type="danger"
      size="large"
      @click="logOut"
      v-show="exitFlag"
      class="end"
      >点击退出</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      exitFlag: true,
    };
  },
  methods: {
    logOut() {
      window.sessionStorage.removeItem("token");
      // window.sessionStorage.removeItem("username");
      this.$toast("退出成功");
      this.$router.go(-1);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    if(!window.sessionStorage.getItem("token")){
      this.exitFlag=false
    }
  },
};
</script>

<style scoped>
.end {
  position: absolute;
  bottom: 0px;
}
</style>