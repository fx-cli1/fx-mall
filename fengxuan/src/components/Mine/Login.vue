<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import userModel from "../../model/users/index";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      userModel
        .login({ username: this.username, password: this.password })
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$toast(res.data.message);
            window.sessionStorage.setItem("token", res.data.token);
            this.$router.push("/mine");
          } else {
            this.$toast(res.data.message);
          }
        });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>