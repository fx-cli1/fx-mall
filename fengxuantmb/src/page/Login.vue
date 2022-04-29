<template>
  <div class="login">
    <div class="login-container">
      <div class="header">
        <img class="logo" src="../assets/login.png" />
        <div class="name">
          <div class="title">峰选商城</div>
          <div class="tips">峰选后台管理系统</div>
        </div>
      </div>
      <el-form
        ref="ruleFormRef"
        :model="state.ruleForm"
        status-icon
        :rules="rules"
        label-width="50px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="state.ruleForm.username"
            type="username"
            autocomplete="off"
            size="large"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="state.ruleForm.password"
            type="password"
            autocomplete="off"
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import userModel from "../model/user/Service";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { localSet } from "../utils/index";
import { useRouter } from "vue-router";

const ruleFormRef = ref<FormInstance>();
const $router = useRouter();
const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入账号"));
  } else {
    callback();
  }
};
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
};

const goAdd = () => {
};
const state = reactive({
  ruleForm: {
    username: "",
    password: "",
  },
});

const rules = reactive({
  username: [{ validator: validateUsername, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      //   console.log(state.ruleForm.username);
      userModel
        .login({
          username: state.ruleForm.username,
          password: state.ruleForm.password,
        })
        .then((res) => {
          let { data } = res;
          if (data.code == 200) {
            ElMessage("登录成功");
            localSet("token", data.token);
              $router.push({ path: "/add" });
          }
        });
    } else {
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  .login-container {
    width: 420px;
    height: 500px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
  }
}
/deep/.el-form {
  width: 70%;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 0 20px 0;
}
.header img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.header .title {
  font-size: 28px;
  color: #1baeae;
  font-weight: bold;
}
.header .tips {
  font-size: 12px;
  color: #999;
}
</style>