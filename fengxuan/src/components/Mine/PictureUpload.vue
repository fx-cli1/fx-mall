<template>
  <div class="Picture-upload">
    <van-uploader :after-read="afterRead">
      <img :src="imgUrl" alt="" class="img" />
    </van-uploader>
  </div>
</template>

<script>
import userModel from "../../model/users/index";
export default {
  data() {
    return {
      imgUrl:
        "https://p9-passport.byteacctimg.com/img/mosaic-legacy/3791/5070639578~300x300.image",
    };
  },
  methods: {
    async afterRead({ file }) {
      // 此时可以自行将文件上传至服务器
      let data = new FormData();
      data.append("file", file);
      let res = await userModel.uploads(data);
      // console.log(res);
      if (res.data.code == 200) {
        this.$nextTick(() => {
          this.imgUrl = res.data.headUrl;
        });
      }
    },
  },
  created() {
    console.log(window.localStorage.getItem("token"));
  },
};
</script>

<style scoped>
.van-uploader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #f00;
}
>>> .van-uploader__input {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
>>> .van-uploader__upload {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
>>> .van-uploader__wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
