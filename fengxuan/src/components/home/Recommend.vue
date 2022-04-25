<template>
  <div>
    <myswipe
      :imgsrclist="imgarr"
      :autoplayFlag="active == '0' ? true : false"
    ></myswipe>
    <myclasslist :list="shoppingclasslist"></myclasslist>
    <div class="divider_line"></div>
    <div class="advertising">
      <div class="advertising-big">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/29b39579739d82269d18f0e7c8f6c9da.jpg?f=webp&w=537&h=762&bg=57524C"
          alt=""
        />
      </div>
      <div class="advertising-arr">
        <div class="advertising-arr-top">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b9af94e5c05bb2b4849cbb113eddb9d.jpg?f=webp&w=537&h=378&bg=EBF8FF"
            alt=""
          />
        </div>
        <div class="advertising-arr-bottom">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a12873ff30a6da401d74728878625c37.jpg?f=webp&w=537&h=378&bg=D2EDFF"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="divider_line"></div>
    <div class="phone">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beac5a54f4f4d93cb3f680a097b4f644.jpg?f=webp&w=1080&h=660&bg=F5F5F5"
        alt=""
      />
      <div class="phone-list">
        <div class="phone-list-item" v-for="item in phoneList" :key="item.id">
          <div class="img">
            <img :src="item.imgsrc" alt="" />
          </div>
          <div class="tag" v-if="item.gift">
            <img src="@/assets/img/gift.png" alt="" />
          </div>
          <div class="info">
            <div class="name">{{ item.goodsname }}</div>
            <div class="brief">{{ item.brief }}</div>
            <div class="price">
              ￥{{ item.endprice }}<span>起</span><s>{{ item.startprice }}</s>
            </div>
            <div class="buybtn">立即购买</div>
          </div>
        </div>
      </div>
      <div class="phone-gd">更多小米手机产品></div>
    </div>
    <div class="divider_line"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import myswipe from "./Myswipe.vue";
import myclasslist from "./Shoppingclass.vue";
import axios from 'axios';
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
      shoppingclasslist: [
        {
          id: 1,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1749080cf5bbc4dfebff83013bbebaf.png?f=webp&w=216&h=228&bg=FFFFFF",
        },
        {
          id: 2,
          imgsrc:
            "https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD",
        },
        {
          id: 3,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69c250436545049ccab81c3e32033cf2.png?f=webp&w=216&h=228&bg=FFFFFF",
        },
        {
          id: 4,
          imgsrc:
            "https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE",
        },
        {
          id: 5,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0434594382110f3bd15c90f040d5d542.jpg?f=webp&w=216&h=228&bg=FFFFFF",
        },
        {
          id: 6,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF",
        },
        {
          id: 7,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA",
        },
        {
          id: 8,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5",
        },
        {
          id: 9,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF",
        },
        {
          id: 10,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8",
        },
      ],
      phoneList: [
        {
          id: 1,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b849e46756af7c95002aa3906ed77c13.jpg?thumb=1&w=344&h=280",
          goodsname: "Xiaomi 11 Pro",
          brief: "1/1.12''GN2｜骁龙888",
          startprice: 4999,
          endprice: 3399,
          gift: false,
        },
        {
          id: 2,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/94b22bbff9fa84440a0aed48f9f63154.jpg?thumb=1&w=344&h=280",
          goodsname: "Xiaomi MIX FOLD折叠屏手机",
          brief: "折叠大屏｜自研芯片",
          startprice: 7999,
          endprice: 6999,
          gift: false,
        },
        {
          id: 3,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/455c8ad8d204e4ffd67865a98ae40c7b.jpg?thumb=1&w=344&h=280",
          goodsname: "Xiaomi 10S",
          brief: "骁龙870 | 对称式双扬立体声",
          startprice: undefined,
          endprice: 2699,
          gift: true,
        },
        {
          id: 4,
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6dca45286d9d76d1f864a8ecf77f5600.jpg?thumb=1&w=344&h=280",
          goodsname: "Note 9 5G",
          brief: "天玑 800U处理器",
          startprice: 1299,
          endprice: 1149,
          gift: false,
        },
      ],
    };
  },
  methods:{
    
  },
  created(){
     axios.get("http://localhost:8080/goods/recommendgoods").then((res) => {
     let {data}=res;
     console.log(data.data);
     this.phoneList=data.data
    });
  }
};
</script>

<style scoped>
.divider_line {
  width: 100%;
  height: 16px;
  background: rgb(245, 245, 245);
}
.advertising {
  width: 100%;
  display: flex;
}
.advertising-big {
  width: 50%;
}
.advertising-big img {
  width: 100%;
}
.advertising-arr {
  flex: 1;
}
.advertising-arr img {
  width: 100%;
}
.phone {
  width: 100%;
}
.phone img {
  width: 100%;
}
.phone-list {
  width: 100%;
  padding: 0 13px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
}
.phone-list-item {
  width: 49%;
  position: relative;
}
.phone-gd {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  color: #999;
}
.info {
  width: 100%;
  text-align: center;
  padding: 10px;
}
.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.87);
}
.brief {
  margin-top: 0.06rem;
  font-size: 20px;
  line-height: 0.3rem;
  color: rgba(0, 0, 0, 0.54);
}
.price {
  font-size: 24px;
  color: #ea625b;
  height: 1.5em;
  line-height: 1.5em;
  position: relative;
  display: inline-block;
}
.price s {
  font-size: 20px;
  color: #999;
}
.buybtn {
  width: 60%;
  background: #ea625b;
  border-radius: 0.05rem;
  text-align: center;
  color: #fff;
  font-size: 28px;
  padding: 0.18rem 0;
  font-weight: 700;
  margin: 0 auto;
}
.tag {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 20px;
  top: 180px;
}
</style>