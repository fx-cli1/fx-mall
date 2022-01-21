<template>
  <div>
    <myswipe :imgsrclist="imgarr"></myswipe>
  </div>
</template>

<script>
import myswipe from "./Myswipe.vue";
export default {
  components: {
    myswipe,
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