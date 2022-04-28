<template>
  <div>
    <van-nav-bar
      title="修改密码"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- <van-form validate-first @failed="onFailed">
      <van-field
        v-model="value1"
        name="原密码"
        placeholder="请填写原密码"
        :rules="[{ required: true, message: '原密码错误' }]"
      />

      <van-field
        v-model="value2"
        name="确认密码"
        placeholder="请填写新密码"
        :rules="[{ pattern, message: '密码应以开头为字母且长度为6-10位数组成' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form> -->

    <van-cell-group>
      <van-field
        v-model="phone"
        required
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="newPwd"
        required
        label="新密码"
        placeholder="请输入新密码"
      />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary" @click="getyzCode"
            >发送验证码</van-button
          >
        </template>
      </van-field>
    </van-cell-group>
    <van-button round type="info" class="config" @click="submit"
      >确认</van-button
    >
  </div>
</template>

<script>
import userModel from "../../model/users/index";
import wyyModel from "../../model/wyy-mmyz/index";
export default {
  data() {
    return {
      sms: "",
      phone: "",
      newPwd: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    getyzCode() {
      //获取验证码
      wyyModel.sendYzm({ phone: this.phone }).then((res) => {
        console.log(res);
      });
    },
    submit() {
      //提交并验证
      console.log(this.phone, this.newPwd, this.sms);
      wyyModel
        .verificationYzm({
          phone: this.phone,
          captcha: this.sms,
        })
        .then((res) => {
          if (res.data.code == 200) {
            // console.log(1111);
            userModel.setpassword({ password: this.newPwd }).then((res1) => {
              console.log(res1);
              this.$toast(res1.data.message);
            });
          }
        })
        .catch(() => {
          this.$toast("验证码错误,请输入正确的验证码");
        });
    },
  },
};
</script>

<style scoped>
.config {
  width: 100%;
}
</style>