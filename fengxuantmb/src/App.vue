<template>
  <div class="layout">
    <el-container
      v-if="$route.path!=='/login'"
      class="container"
    >
      <el-aside class="aside">
        <div class="head">
          <div>
            <img src="./assets/1.jpg" alt="logo" />
            <span>峰选后台管理</span>
          </div>
        </div>
        <div class="line" />
        <el-menu
          :default-openeds="['1', '3']"
          background-color="#222832"
          text-color="#fff"
          :router="true"
          :default-active="state.currentPath"
        >
          <el-sub-menu index="1">
            <template #title>基础配置</template>
            <el-menu-item-group>
              <el-menu-item index="/add"
                ><i class="el-icon-plus" />添加商品</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper"
                ><i class="el-icon-picture" />轮播图配置</el-menu-item
              >
              <el-menu-item index="/hot"
                ><i class="el-icon-star-on" />热销商品配置</el-menu-item
              >
              <el-menu-item index="/new"
                ><i class="el-icon-sell" />新品上线配置</el-menu-item
              >
              <el-menu-item index="/recommend"
                ><i class="el-icon-thumb" />推荐配置</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>模块管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/category"
                ><i class="el-icon-menu" />分类管理</el-menu-item
              >
              <el-menu-item index="/goods"
                ><i class="el-icon-s-goods" />商品管理</el-menu-item
              >
              <el-menu-item index="/users"
                ><i class="el-icon-user-solid" />用户管理</el-menu-item
              >
              <el-menu-item index="/order"
                ><i class="el-icon-s-order" />订单管理</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <!-- <Footer /> -->
      </el-container>
    </el-container>
    <el-container v-else class="container">
      <router-view />
    </el-container>
  </div>
</template>

<script>
import { onUnmounted, reactive } from "vue";
import Header from "./components/Header.vue";
// import Footer from '@/components/Footer.vue'
import { useRouter } from "vue-router";
import { localGet } from "./utils/index";
export default {
  name: "App",
  components: {
    Header,
    // Footer
  },
  setup() {
    const noMenu = ["/login"];
    const router = useRouter();
    const state = reactive({
      defaultOpen: ["1", "2", "3", "4"],
      showMenu: true,
      currentPath: "/add",
      count: {
        number: 1,
      },
    });
    console.log(router);
    // 监听浏览器原生回退事件
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener(
        "popstate",
        () => {
          if (!localGet("token")) {
            state.showMenu = false;
          }
        },
        false
      );
    }

    return {
      state,
    };
  },
};
</script>

<style lang="less" scoped>
/deep/.el-menu-item-group__title {
  width: 0px;
  height: 0px;
  padding: 0;
}
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh;
}
.aside {
  width: 200px !important;
  background-color: #222832;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.aside::-webkit-scrollbar {
  display: none;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>
<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-menu {
  border-right: none !important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.el-submenu:first-child {
  border-top: none;
}
.el-submenu [class^="el-icon-"] {
  vertical-align: -1px !important;
}
a {
  color: #409eff;
  text-decoration: none;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-popper__arrow {
  display: none;
}
</style>
