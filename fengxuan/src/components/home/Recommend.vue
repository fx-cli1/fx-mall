<template>
  <div>
    <myswipe
      :imgsrclist="imgarr"
      :autoplayFlag="active == '0' ? true : false"
    ></myswipe>
  <h1>11111111111111</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
import myswipe from "./Myswipe.vue";
export default {
  components: {
    myswipe,
  },
  computed: {
    ...mapState("homestore", ["active"]),
  },
  data() {
    return {
      imgarr: [
        {
          id: 1,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f298d91a553847818f6a94c7f24f2b92.jpg?thumb=1&w=720&h=360",
        },
        {
          id: 2,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aeeb8d435117501fa0d8b8ec1e09cc1d.jpg?thumb=1&w=720&h=360",
        },
        {
          id: 3,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6ff526b9d75342f0995778b56060b85.jpg?thumb=1&w=720&h=360",
        },
      ],
    };
  },
};
</script>

<style>
</style>