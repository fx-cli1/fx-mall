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
          v-model="form.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="form.password"
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
// import userModel from "../../model/users/index";
// import wyyModel from "../../model/wyy-mmyz/index";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      // console.log(this.form);
      // let res = await userModel.register({
      //   user_name: this.form.username,
      //   password: this.form.password,
      // });
      // console.log(res);
      // userModel.register({
      //   user_name: this.form.username,
      //   password: this.form.password,
      // }).then(()=>{

      // });
      // wyyModel.sendYzm({
      //   phone: "13396135859",
      // }).then((res)=>{
      //   console.log(res);
      // });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>