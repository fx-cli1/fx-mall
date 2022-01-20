<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="activenum" @change="onChange">
      <van-tabbar-item><span class="iconfont icon-home"></span><br>首页</van-tabbar-item>
      <van-tabbar-item><span class="iconfont icon-fenlei"></span><br>分类</van-tabbar-item>
      <van-tabbar-item><span class="iconfont icon-faxian"></span><br>发现</van-tabbar-item>
      <van-tabbar-item><span class="iconfont icon-gouwuche"></span><br>购物车</van-tabbar-item>
       <van-tabbar-item><span class="iconfont icon-wode-tianchong"></span><br>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
import {mapMutations, mapState} from 'vuex'
export default {
  data(){
    return {
      routerArr:['/','/classification','/find','/shoppingcart','/mine']
    }
  },
  computed:{
    ...mapState(['active']),
    activenum:{
      get(){
        return this.active;
      },
      set(v){
        this.setActive(v);
      }
    }
  },
  methods: {
    ...mapMutations(['setActive']),
    onChange(index){
      this.$router.push(this.routerArr[index]);
    }
  },
};
</script>


<style scoped>
.van-tabbar{
  text-align: center;
  border-top:1px solid #ccc ;
}
.van-tabbar .icon-home{
  font-size: 30px;
}
.van-tabbar .icon-fenlei{
  font-size: 30px;
}
.van-tabbar .icon-faxian{
  font-size: 30px;
}
.van-tabbar .icon-gouwuche{
  font-size: 30px;
}
.van-tabbar .icon-wode-tianchong{
  font-size: 30px;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
