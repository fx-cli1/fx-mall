<template>
  <div>
    <van-nav-bar
      title="新增地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      areaList,
      searchArr:[]
    };
  },
  methods: {
    onSave(value) {
      this.$toast("save");
      this.searchArr=value
      console.log(this.searchArr);
      this.$router.push({
          path:"/location",
          query:{searchArr:this.searchArr}
      })
    },
    onDelete() {
      this.$toast("delete");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>