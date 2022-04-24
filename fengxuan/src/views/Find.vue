<template>
  <div>
    <h1>发现</h1>
    <input type="text" ref="input" v-model="obj.a" />
    <pictureupload></pictureupload>
    <van-uploader :after-read="afterRead">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b2bb13c396cc6205dd91da3a91a275a.jpg?thumb=1&w=720&h=360"
        alt=""
        class="img"
      />
    </van-uploader>
  </div>
</template>

<script>
import pictureupload from "@/components/Mine/PictureUpload.vue";
import axios from "axios";
export default {
  data() {
    return {
      obj: {
        a: 200,
      },
    };
  },
  created() {
    this.obj.a = 500;
  },
  components: {
    pictureupload,
  },
  methods: {
    afterRead({ file }) {
      // 此时可以自行将文件上传至服务器
      let data = new FormData();
      data.append("file", file);
      axios
        .post("/upload-api/user/uploads", data)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.van-uploader {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #f00;
}
>>> .van-uploader__input {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
>>> .van-uploader__upload {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
>>> .van-uploader__wrapper {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>