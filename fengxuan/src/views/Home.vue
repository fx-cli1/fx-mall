<template>
  <div class="home">
    <!-- <h1>峰选商场</h1> -->
    <mytop></mytop>
    <van-tabs v-model="active" animated title-active-color='#f90'>
      <van-tab title="推荐">
        <recommend></recommend>
      </van-tab>
      <van-tab title="智能">
        <intelligence></intelligence>
      </van-tab>
      <van-tab title="电视">
        <television></television>
      </van-tab>
      <van-tab title="家电">
        <household></household>
      </van-tab>
      <van-tab title="笔记本">
        <notebook></notebook>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import mytop from "../components/home/Top.vue";
import recommend from "../components/home/Recommend.vue";
import television from "../components/home/Television.vue";
import notebook from "../components/home/Notebook.vue";
import intelligence from "../components/home/Intelligence.vue";
import household from "../components/home/Household.vue";
export default {
  name: "Home",
  components: {
    mytop,
    recommend,
    television,
    notebook,
    intelligence,
    household,
  },
  data(){
    return {
      active:0
    }
  }
};
</script>

<style scoped>
h1 {
  width: 375px;
}
/deep/.van-tabs__nav--line {
  background: rgb(242, 242, 242);
}
</style>
