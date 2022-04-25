<template>
  <div>
    <van-nav-bar
      title="个人中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <ul class="myList">
      <li>地址管理<span>></span></li>
    </ul>
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
import bus from "../../bus";
export default {
  data() {
    return {
      exitFlag: true,
    };
  },
  methods: {
    logOut() {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("username");
      this.$toast("退出成功");
      this.$router.go(-1);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    if (window.localStorage.getItem("token")) {
      this.exitFlag = true;
    } else {
      this.exitFlag = false;
    }
    bus.$emit("changeFlag", false);
  },
  destroyed() {
    bus.$emit("changeFlag", true);
  },
};
</script>

<style scoped>
.myList {
  width: 100%;
  /* height: 1000px; */
}
.myList li {
  height: 80px;
  line-height: 80px;
  font-size: 28px;
  border-bottom: 2px solid #f6f6f6;
  color: #3c3c3c;
  padding: 0px 20px;
}
.myList li span {
  float: right;
}
.end {
  position: absolute;
  bottom: 0px;
}
</style>