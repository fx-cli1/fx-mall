<template>
  <div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
    >
      <van-swipe-item v-for="item in imgArr" :key="item.id">
        <img :src="item.imgscr" alt="" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/8</div>
      </template>
    </van-swipe>
    <div class="navBar">
      <div><span><van-icon name="arrow-left" size="20px" color="#fff" /></span></div>
      <div><span><van-icon name="share-o" size="20px" color="#fff" /></span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      imgArr: [
        {
          id: 1,
          imgscr:
            "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204270017_74bdd10bd3254005a812c11c60f170b0.jpg",
        },
        {
          id: 2,
          imgscr:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0db739c3242fd840db5b4a7d00f5dc43.jpg",
        },
        {
          id: 3,
          imgscr:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f3afbb2c3c64643b64194610e83795f.jpg",
        },
        {
          id: 4,
          imgscr:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/771962e3e88f7757457b59c0f9d3cadb.jpg",
        },
        {
          id: 5,
          imgscr:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8643da5e34f0f27d59c188cd1a461b48.jpg",
        },
        {
          id: 6,
          imgscr:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/08f1175386a3ac61423196477cbcd334.jpg",
        },
        {
          id: 7,
          imgscr:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/94d96c768543ca58ef83847831b2a868.jpg",
        },
        {
          id: 8,
          imgscr:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4849ee6c6a7c6979c114fe2c2d8e5b2.jpg",
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  width: 100%;
  height: 800px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
}
.navBar {
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
}

.navBar div {
  width: 120px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #39a9ed;
}

.navBar div span{
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: palegreen;
}
</style>