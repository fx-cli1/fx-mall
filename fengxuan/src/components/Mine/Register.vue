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
        <van-field
          v-model="form.phone"
          name="手机号码"
          label="手机号码"
          placeholder="手机号码"
          :rules="[{ required: true, message: '请填写手机号码' }]"
        />
        <verification ref="verification" :phone="form.phone" />
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
import wyyModel from "../../model/wyy-mmyz/index";
import verification from "./verification.vue";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        phone: "",
      },
    };
  },
  components: {
    verification,
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      //  console.log(this.$refs.verification.yzCode);
      wyyModel
        .verificationYzm({
          phone: this.form.phone,
          captcha: this.$refs.verification.yzCode,
        })
        .then((res) => {
          if (res.data.code == 200) {
            // console.log(1111);
            userModel
              .register({
                username: this.form.username,
                password: this.form.password,
                phone: this.form.phone,
              })
              .then((res1) => {
                console.log(res1);
                if (res1.data.code == 200) {
                  this.$dialog
                    .confirm({
                      title: "标题",
                      message: "注册成功,是否前往登录界面",
                      theme: "round_button",
                    })
                    .then(() => {
                      this.$router.push({ path: "/login" });
                    })
                    .catch(() => {
                      // this.$router.push("/");
                    });
                }else{
                  this.$toast(res1.data.message);
                }
              });
          }
        })
        .catch(() => {
          this.$toast("验证码错误,请输入正确的验证码");
        });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
</style>