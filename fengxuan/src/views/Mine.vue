<template>
  <div class="overall">
    <div>
      <div class="nav_background">
        <div class="nav_img">
          <pictureUpload ref="pictureupload" />
          <!-- <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt="" /> -->
          <!-- <img src="https://p9-passport.byteacctimg.com/img/user-avatar/3556c16524cc67bb3bd86d92db70dd9f~300x300.image" alt="" /> -->
        </div>
        <div class="nav_right" v-show="!showFlag">
          <router-link to="/login">登录&nbsp;</router-link>
          <router-link to="/register">/&nbsp;注册</router-link>
        </div>
        <div class="nav_right1" v-show="showFlag">
          <router-link to="">用户:{{ this.username }}</router-link>
        </div>
      </div>
      <div class="order">
        <div class="order_left">我的订单</div>
        <div class="order_right">全部订单&nbsp;></div>
      </div>
      <div class="serve">
        <ul>
          <li>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMUQ5NDYxMThGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMUQ5NDYxMjhGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxRDk0NjBGOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYxRDk0NjEwOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0LK+9gAAAXNJREFUeNrsnLEOgjAURcUYd/k/Rhh1My7+gJsrYeP7xNHEpXZoIjYIpQnwaM9N3qBLw8nr7ePWmCilNui/tiAAEIAABCAAAQhAkWrX/lCWZXQAiqIY3UF7XXddD10qwGrM8+1Hd5DRTdcx4KY5mOd76br4eFAWye7KfU06jQRQ6rvFbCUBQRkdXXDMAwhAAAIQgAAEIAAh70k6aNkRjx1/SOugqaOWrleP3vhDWgctEbX0xh/SOmjJqCVfg0mn0taWbtJTRy2D8QfHPIAABKCBeWnUNU4sk7Q9Lzlf48TSQZnrHIMH4UGdqju+q/Cgr85miMxawK4A+uqt62SKLYYHAWi9ku5Big76VSNtbWmA6gXXrtawxdrzzWGmNZ99c5Q0QFPPN7anDSaW0d+L+fwMGAEIQAACEIAABCAAIadJWtFBDq/9AarxBVRHAqjy3WJLRA5zqjfecAE025XKGpTw9zgc8wACEIAABCAAAQh16SPAAD22hrFVOZLnAAAAAElFTkSuQmCC"
            />

            <p>待付款</p>
          </li>
          <li>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMUQ5NDYxNThGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMUQ5NDYxNjhGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxRDk0NjEzOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYxRDk0NjE0OEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4cr/ZAAAA0JJREFUeNrsnD1oFEEUx+e8GLGQxFOw0MbCryhGEGyFoKIoCFqKoqKniGjSSBSuVRTRRBTMcYUQLBUbbSJpUlkIBpOIprG00IsEJOJH1v9jH7JZ5vb29nb25nbfgx9cZnbv7f13Pt68nU3OcRwlVtuWiQQiUFPWUS6XE3VYLBalBUkXE4HE/o9BSTtMesxrdmyUFtTiLtYJhsE34FhGla+ts5Vd7A64YmnjWM3XtgAGW9WCTrZBLzrfyi5WaAOBCjbNYjlLRAm9QpdZTAQSgUSgtAq0VgSqbUfBlAikj05HwQuwTlbzS+0gqID1MgYttVVgBLxKmzhxCLQXTIKiJkqezLJAy8FtMA42+ur+gJtgT1bHoC3gKditqZsBZ8GbrHaxc+CtRpxFcJfLUyNOIy1oDaBk8jFN3WdwCkxkNZLuA+9qiPME9KZVnHoCUa52CIyBDb66ryzYGTCf5rVYUBejfPJVTTnNXCfAl6wvVk9rpu8S2J8Vceq1oC7NWDShMmaNTPOZE8dkukMEEoHEGl6LOdKCzFpVBAq2Stq7WFSbU26eupR2gXIqg9ah23pm6zY5meZFIBFIBBKBmrMecA98AD+ZGS7raSMfsQtE6dmH4D0YAFvBCmYbl1HdY7DSYh9GAkW68JdgX4ibcQFsAofAL8t8GGtB90NcuNf6uDvY5sOIQNv5jnltFhxXbsq2iz/P+o65yOfa4sOYQPSkNe/5+5Nyn8k/V+7joHn+TGUfPcfl+VxbfMQikO59h37fMdfBd825VHbDV9avwr1TYcJHLAJFyd+8Dqgbi2liidtHNapAozGHFElkJKP4qEQV6Bp4wPmcsBY00xyISYS4fMzx7ytFFYhiCHr0XOBckI4h3zm0capb813dXOe14YDvTcJHgX9fYKyUi/qfFzhntEO5Oz/yvil40DMe0KPqW2Cz55i/YBeYCnpNPAkfpiNp2gtNGzgvecooin1W57wRFX4fdRI+jEbSA3VmFr+N8zm2+TAmEPXhw+CRcrfi1bJFvqtHIqyRkvBhdDVPF3MZ7OSBkSLa3+AHmOayXg7/Fyz2YWQ177VpTeSr2tBH87NYVkxSriKQCCQCiUAikAiUWvsnwABTSwDIZ7YMEAAAAABJRU5ErkJggg=="
            />

            <p>待收货</p>
          </li>
          <li>
            <img src="https://m.mi.com/static/img/nav-4.d68723895f.png" />

            <p>退还修</p>
          </li>
        </ul>
      </div>
      <div class="point">
        <ul>
          <li>
            <div class="point_img">
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic211.nipic.com%2Ffile%2F20190321%2F15097685_214227601000_2.jpg&refer=http%3A%2F%2Fpic211.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650882761&t=11bc02d0c1a986d43644018f59acc35f"
                alt=""
              />
            </div>
            <div class="point_wenzi">会员中心</div>
          </li>
          <li>
            <div class="point_img">
              <img
                src="https://img2.baidu.com/it/u=1395045750,931427369&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                alt=""
              />
            </div>
            <div class="point_wenzi">我的优惠</div>
          </li>
          <li>
            <div class="point_img">
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F94%2F22%2F5ac4919fd814f_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650882823&t=a0ea67fd7aa913c09849385a027c3674"
                alt=""
              />
            </div>
            <div class="point_wenzi">服务中心</div>
          </li>
          <li>
            <div class="point_img">
              <img
                src="https://img2.baidu.com/it/u=2955870272,3322179466&fm=253&fmt=auto&app=138&f=JPEG?w=676&h=500"
                alt=""
              />
            </div>
            <div class="point_wenzi">小米之家</div>
          </li>
          <li>
            <div class="point_img">
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.soutu123.com%2Felement_origin_min_pic%2F01%2F37%2F10%2F21573c3b17e7e31.jpg%21%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.soutu123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650882879&t=8bad2cfb44389c1f3cc6fd896dcfd126"
                alt=""
              />
            </div>
            <div class="point_wenzi">我的F码</div>
          </li>
          <li>
            <div class="point_img">
              <img
                src="https://img2.baidu.com/it/u=2161066602,3182026745&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501"
                alt=""
              />
            </div>
            <div class="point_wenzi">礼物码兑换</div>
          </li>
          <li>
            <div class="point_img">
              <img
                src="https://m.mi.com/static/img/i-setting.fb9625b3f2.png"
                alt=""
              />
            </div>
            <div class="point_wenzi" @click="goExit">设置</div>
          </li>
        </ul>
      </div>
      <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
          <van-loading size="24px">加载中...</van-loading>
        </div>
      </van-overlay>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import userModel from "../model/users/index";
import pictureUpload from "../components/Mine/PictureUpload.vue";
export default {
  components: {
    pictureUpload,
  },
  data() {
    return {
      username: "",
      showFlag: false,
      show: true,
    };
  },
  methods: {
    goExit() {
      this.$router.push("/exit");
    },
  },
  created() {
    console.log(sessionStorage.getItem("token"));
    userModel.userinfo().then((res) => {
      console.log(res);
      this.username = res.data.username;
      this.$refs.pictureupload.imgUrl = res.data.headUrl
        ? res.data.headUrl
        : "https://p9-passport.byteacctimg.com/img/mosaic-legacy/3791/5070639578~300x300.image";
      this.show = false;
    });
    if (window.sessionStorage.getItem("token")) {
      this.showFlag = true;
    }
  },
};
</script>

<style scoped>
.overall {
  background: #f5f5f5;
}
.nav_background {
  width: 100%;
  height: 150px;
  background: url("https://m.mi.com/static/img/bg.63c8e19851.png") center 0
    #f37d0f;
  background-size: auto 100%;
}
.nav_img {
  width: 120px;
  height: 120px;
  margin-left: 40px;
  float: left;
  margin-top: 25px;
}
.nav_img > img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.nav_right {
  width: 130px;
  height: 150px;
  float: left;

  line-height: 150px;
}
.nav_right > a {
  color: white;
  font-size: 26px;
}
.nav_right1 {
  /* width: 130px; */
  height: 150px;
  float: left;

  line-height: 150px;
}
.nav_right1 > a {
  color: white;
  font-size: 26px;
}
.order {
  width: 100%;
  background: white;
  height: 92px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.order_left {
  width: 200px;
  height: 92px;
  float: left;
  font-size: 28px;
  text-align: center;
  line-height: 92px;
}
.order_right {
  width: 200px;
  height: 92px;
  float: right;
  text-align: center;
  line-height: 92px;
  font-size: 28px;
}
.serve {
  width: 100%;
  height: 200px;
  background: white;
}
.serve > ul {
  width: 100%;
  height: 200px;
  display: flex;
  /* justify-content: center; */
  justify-content: space-around;
  align-items: center;
}
.serve > ul > li > img {
  width: 56px;
  height: 56px;
}
.point {
  width: 100%;
}
.point > ul {
  margin-top: 20px;
}
.point > ul > li {
  width: 100%;
  height: 120px;
  background: white;
  display: flex;
  text-align: center;
  line-height: 120px;
  font-size: 28px;
}
.point > ul > li:nth-child(2n + 1) {
  width: 100%;
  height: 120px;
  background: white;
  display: flex;
  text-align: center;
  line-height: 120px;
  font-size: 28px;
  margin-top: 20px;
}
.point > ul > li .point_img {
  width: 120px;
  height: 120px;
  overflow: hidden;
}
.point > ul > li .point_img > img {
  width: 60px;
  height: 60px;
  margin-top: 30px;
}
.point_wenzi {
  width: 100%;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>

