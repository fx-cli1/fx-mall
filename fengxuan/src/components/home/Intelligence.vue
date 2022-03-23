<template>
  <div>
    <myswipe
      :imgsrclist="imgarr"
      :autoplayFlag="active == '1' ? true : false"
    ></myswipe>
    <myclasslist :list="shoppingclasslist"></myclasslist>
  </div>
</template>

<script>
import myswipe from "./Myswipe.vue";
import { mapState } from "vuex";
import myclasslist from "./Shoppingclass.vue";
import axios from 'axios'
export default {
  components: {
    myswipe,
    myclasslist,
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
      shoppingclasslist: [
        {
          id: 1,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47dad0c224065a73a4c722eeaf1b8e1.jpg",
        },
        {
          id: 2,
          imgsrc:
            "https://i8.mifile.cn/v1/a1/eddc5967-7f37-bf45-72d9-de0db438658b.webp",
        },
        {
          id: 3,
          imgsrc:
            "https://i8.mifile.cn/v1/a1/8d73dc73-3a27-1587-6c43-47998c859a48.webp",
        },
        {
          id: 4,
          imgsrc:
            "https://i8.mifile.cn/v1/a1/afe66888-30af-d023-ebbe-6ed7e4607167.webp",
        },
        {
          id: 5,
          imgsrc:
            "https://i8.mifile.cn/v1/a1/3ad80cd6-0188-1c0a-95d3-aeaa58ede247.webp",
        },
        {
          id: 6,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b8b8e686044afb2585e78a03ee96b6.png",
        },
        {
          id: 7,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3304e52970aa972c4f4ccd6eb424ad7.png",
        },
        {
          id: 8,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed94691e4b361f237d411c3f687c2d4.png",
        },
        {
          id: 9,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2bc35b6be2ab377bfc7e8fddeaa54c5.png",
        },
        {
          id: 10,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41a54c825db28e47888db6bd61349de.png",
        },
      ],
    };
  },
  created() {
    console.log(1);
    axios.post("http://localhost:8080/goods/add").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style>
</style>