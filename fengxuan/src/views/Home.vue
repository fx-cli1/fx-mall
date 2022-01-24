<template>
  <div class="home">
    <!-- <h1>峰选商场</h1> -->
    <mytop></mytop>
    <van-tabs v-model="activenum" animated title-active-color="#f90">
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
import { mapMutations, mapState } from "vuex";
import {mymixin} from '../assets/mixins/index';
export default {
  name: "Home",
  mixins:[mymixin.mychekgetbs],
  components: {
    mytop,
    recommend,
    television,
    notebook,
    intelligence,
    household,
  },
  computed: {
    ...mapState("homestore", ["active"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations("homestore", ["setActive"]),
  },
};
</script>

<style scoped>
.home{
  /* position: relative; */
  padding-bottom: 100px;
  overflow: hidden;
}
/deep/.van-tabs__nav--line {
  background: rgb(242, 242, 242);
}
/deep/.van-tabs__wrap{
  position: fixed;
  top: 90px;
  left: 0;
  width: 750px;
  z-index: 99;
}
/deep/.van-tabs__content{
border-top: 1px solid #ccc;
margin-top: 170px;
}
</style>
