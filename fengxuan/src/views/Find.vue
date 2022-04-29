<template>
  <div>
    <h1>发现12321</h1>
    <input type="text" ref="input" v-model="obj.a" />
    <pictureupload></pictureupload>
  </div>
</template>

<script>
import pictureupload from "@/components/Mine/PictureUpload.vue";
import myBMap from "../utils/myBMap";

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
    this.getLocation();
  },
  components: {
    pictureupload,
  },
  methods: {
    getLocation() {
      //Toast("如长时间未获取办理区域请手动选择");
      myBMap.init().then(() => {
        // let that = this;
        let geolocation = new BMap.Geolocation();
        // 创建百度地理位置实例，代替 navigator.geolocation
        geolocation.getCurrentPosition(function (e) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            // 百度 geolocation 的经纬度属性不同，此处是 point.lat 而不是 coords.latitude
            let point = new BMap.Point(e.point.lng, e.point.lat);
            let gc = new BMap.Geocoder();
            gc.getLocation(point, function (rs) {
              console.log(rs);
              //<<<<<<<<<<<<<<<<需要的位置信息在这获取
            });
          } else {
            Toast("定位失败，请手动选择区域或重新定位");
            this.showloading = false;
          }
        });
      });
    },
  },
};
</script>

<style scoped>
</style>