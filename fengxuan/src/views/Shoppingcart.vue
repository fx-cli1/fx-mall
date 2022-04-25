<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <notebook></notebook> -->
  </div>
</template>

<script>
import bus from "../bus";
// import Notebook from "../components/home/Notebook.vue"
export default {
  // components:{Notebook},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  data() {
    return {};
  },
  created() {
    bus.$emit("changeFlag", false);
  },
  destoryed() {
    bus.$emit("changeFlag", true);
  },
};
</script>

<style>
</style>