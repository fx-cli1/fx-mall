<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="note">
      <div class="note-top">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bc92bd7fdb80c023c6887ae4f419e71.jpg?f=webp"
          alt=""
        />
      </div>
      <div class="note-center">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b40029067abdfcc40bb6bde90b5d95d8.jpg?thumb=1&w=696&h=436"
          alt=""
        />
        <div class="note-bottom">
          <div class="note-left">
            <p>RedmiBook Air 13</p>
            <p>￥5199起</p>
          </div>
          <div class="note-right">
            <div>打开它,就像翻开一本杂志</div>
            <div>立即购买</div>
          </div>
        </div>
      </div>
      <div class="note-center">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84771bd0e6146ecbb6479735a4263ed5.jpg?thumb=1&w=696&h=436"
          alt=""
        />
        <div class="note-bottom">
          <div class="note-left">
            <p>RedmiBook Air 13</p>
            <p>￥5199起</p>
          </div>
          <div class="note-right">
            <div>打开它,就像翻开一本杂志</div>
            <div>立即购买</div>
          </div>
        </div>
      </div>

      <div class="note-di">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a6c6904c72672a67f1ddb6d4938d414.jpg?f=webp"
          alt=""
        />
      </div>
      <div class="note-di">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aeb37b208fc7303d6a6e16b57e4e1942.jpg?f=webp"
          alt=""
        />
      </div>
      <div class="note-di">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e320df8ff307626d984f1708d3c961f2.jpg?f=webp"
          alt=""
        />
      </div>
      <div class="note-di1">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0de51cddbd973e1ac2e27ba05a0693.jpg?f=webp"
          alt=""
        />
      </div>
      <ul class="note-di2">
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d1ffaea355ab590ee88a48c9ab1ef0f.jpg?f=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d4e381d6664a0f4aa94984af7b676de5.jpg?f=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/400e740d63fe4f377b05a3c969f150bf.jpg?f=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a1a44f1b6a7ed090eb624969845bd7e.jpg?f=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8cd3044325d320007ec3c3444396287d.jpg?f=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/21d72b6e96625e586e52ac3e6b0bfedc.jpg?f=webp"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import bus from "../../bus"
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      console.log(111);
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.note {
  width: 100%;
  height: 100%;
  background: rgb(72, 120, 166);
}
.note-top {
  width: 100%;
  height: 100%;
}
.note-top > img {
  width: 100%;
  height: 100%;
  margin: 25px 0;
  /* border: 1px solid rgb(72, 120, 165); */
}
.note-center {
  width: 100%;
  height: 650px;
  margin-left: 15px;
  margin-bottom: 20px;
}
.note-center > img {
  width: 96%;
  height: 500px;
  display: block;
}
.note-bottom {
  width: 720px;
  height: 150px;
  background: white;
}
.note-left {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
}
.note-left > p:nth-child(1) {
  /* color: #ea625b; */
  font-size: 26px;
  font-weight: 600;
  font-size: 30px;
  margin: 20px 0 0 0;
}
.note-left > p:nth-child(2) {
  color: #ea625b;
  font-size: 26px;
  margin: 20px 0 0 0;
}
.note-right {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
}
.note-right > div:nth-child(1) {
  width: 250px;
  height: 80px;
  line-height: 80px;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.54);
}
.note-right > div:nth-child(2) {
  width: 200px;
  height: 70px;
  background: #ea625b;
  text-align: center;
  line-height: 70px;
  color: white;
  border-radius: 8px;
}
.note-di {
  width: 100%;
  height: 100%;
}
.note-di > img {
  width: 100%;
  height: 100%;
  margin: 5px 0;
  /* border: 1px solid rgb(72, 120, 165); */
}
.note-di1 {
  width: 100%;
  height: 100%;
}
.note-di1 > img {
  width: 100%;
  height: 100%;
  display: block;
  /* border: 1px solid rgb(72, 120, 165); */
}
.note-di2 {
  /* height: 90px; */
}
.note-di2 > li {
  width: 50%;

  float: left;
}
.note-di2 > li > img {
  width: 100%;
  height: 100%;
}
</style>