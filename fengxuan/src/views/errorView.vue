<template>
  <div>
    <van-empty image="error" description="4这里0是火星4">
      <van-button round type="danger" class="bottom-button" is-link to="/mine">点击回到地球</van-button>
    </van-empty>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bottom-button {
  width: 300px;
  height: 80px;
}
</style>