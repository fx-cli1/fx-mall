<template>
  <div class="about">
    <h1>分类</h1>
    <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
      <template #content>
        <content v-if="active === 0">
          <div class="one">
            <div class="one-1">
              <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            </div>
            <div class="one-1">
              <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
            </div>
            <div class="one-1">
              <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
            </div>
          </div>
        </content>
        <!-- <van-image v-if="active === 0" src="https://img01.yzcdn.cn/vant/apple-1.jpg" /> -->
        <van-image v-if="active === 1" src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
        <van-image v-if="active === 2" src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }, { text: "3" }]
    };
  }
};
</script>

<style>
.one {
  display: flex;
  
}
</style>
