<template>
  <div class="header">
    <h3>{{ $route.meta.title }}</h3>
    <div>退出</div>
  </div>
</template>

<script>
import userModel from "../model/user/Service";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      getuserinfo();
    });
    const getuserinfo = () => {
      userModel.query().then((res) => {
        console.log(res);
      });
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  height: 50px;
}
</style>