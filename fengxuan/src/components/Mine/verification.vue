<template>
  <div class="verification">
    <div class="box">
      <input type="text" placeholder="请输入验证码" v-model="yzCode" />
      <div @click="getCode">发送验证码</div>
    </div>
    <div class="yzcode" v-show="this.yzCode == ''" ref="yzCode">
      <!-- <p>请输入正确的验证码</p> -->
    </div>
  </div>
</template>

<script>
import wyyModel from "../../model/wyy-mmyz/index";
export default {
  data() {
    return {
      yzCode: "",
    };
  },
  props:{
      phone:{
          type:String
      }
  },
  computed:{
      myphone:{
          get(){
              return this.phone;
          }
      }
  },
  methods: {
    getCode() {
      console.log(this.myphone);
      wyyModel
        .sendYzm({
          phone: this.myphone,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.verification {
  width: 100%;
  height: 200px;
  /* background: #000; */
  box-sizing: border-box;
  padding: 20px 20px 10px 20px;
}
.box {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.box input {
  flex: 5;
  height: 90px;
  margin-right: 40px;
  margin-left: 30px;
  border: 0;
  font-size: 26px;
  font-weight: 500;
  color: #333;
}
.box input::placeholder {
  font-size: 24px;
}
.yzcode p {
  color: #f00;
}
input ::-webkit-input-placeholder {
  color: #f5f5f5;
}
.err::-webkit-input-placeholder {
  color: #f00;
}
</style>