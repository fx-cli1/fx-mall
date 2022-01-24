<template>
  <div>
    <myswipe
      :imgsrclist="imgarr"
      :autoplayFlag="active == '1' ? true : false"
    ></myswipe>
  </div>
</template>

<script>
import myswipe from "./Myswipe.vue";
import { mapState } from "vuex";
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
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b2bb13c396cc6205dd91da3a91a275a.jpg?thumb=1&w=720&h=360",
        },
        {
          id: 2,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37bd342303515c7a1a54681599e319a1.jpg?thumb=1&w=720&h=360",
        },
        {
          id: 3,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb4a8b7d9e77567c7330776a866e717f.jpg?thumb=1&w=720&h=360",
        },
        {
          id: 4,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ab1ffaaeb5ca4c02674e9f35b1fd17c.jpg?thumb=1&w=720&h=360",
        },
        {
          id: 5,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2b3ab270e5ae4c9e85d6607cdb97008.jpg?thumb=1&w=720&h=360",
        },
      ],
    };
  },
};
</script>

<style>
</style>