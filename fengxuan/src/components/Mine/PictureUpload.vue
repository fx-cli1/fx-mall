<template>
  <div class="Picture-upload" @click="upload">
    <input
      type="file"
      style="visibility: hidden; position: absolute; top: 0px; width: 0px"
      ref="importJson"
      @change="getFile"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    upload() {
      this.$refs.importJson.dispatchEvent(new MouseEvent("click"));
    },
    getFile({ target }) {
      let inputFile = target.files[0];
      console.log(inputFile);
      let data = new FormData();
      data.append("file", inputFile);
      axios
        .post("/upload-api/user/uploads", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style  scoped>
.Picture-upload {
  width: 100px;
  height: 100px;
  background: #f00;
}
</style>
