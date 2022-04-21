<template>
  <div>
    <van-nav-bar
      title="注册"
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
//点击注册调用这个注册新用户接口
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {},
  methods: {
    async add() {
      let res = axios.post("http://localhost:8080/api/user/add", {
        user_name: this.username,
        password: this.password,
      });
      console.log(res);
    },
    onSubmit(values) {
      console.log(values);
      this.add();
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>