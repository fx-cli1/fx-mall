import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      NavigationFlag: true
    }
  },
  {
    path: '/classification',
    name: 'classification',
    component: () => import('../views/Classification.vue')
  }, {
    path: '/find',
    name: 'find',
    component: () => import('../views/Find.vue'),
    meta: {
      NavigationFlag: true
    }
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import('../views/Shoppingcart.vue'),
    meta: {
      NavigationFlag: false
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue'),
    meta: {
      NavigationFlag: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Mine/Login.vue'),
    meta: {
      NavigationFlag: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Mine/Register.vue'),
    meta: {
      NavigationFlag: false
    }
  },
  {
    path: '/exit',
    name: 'exit',
    component: () => import('../components/Mine/Exit.vue'),
    meta: {
      NavigationFlag: false
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/Detail.vue'),
    beforeEnter: (to, from, next) => {//路由独享守卫，详情页只能从指定页面进入
      if (from.path == "/" || from.path == "/shoppingcart") {
        next()
      } else {
        next("/mine")
      }
    },
    meta: {
      NavigationFlag: false
    }
  },
  {
    path: '/changePwd',
    name: 'changePwd',
    component: () => import('../components/Exit/changePwd.vue'),
    meta: {
      NavigationFlag: false
    }
  },
  {
    path: '/location',
    name: 'location',
    component: () => import('../components/Exit/Location.vue'),
    meta: {
      NavigationFlag: false
    }
  },
  {
    path: '/location2',
    name: 'location2',
    component: () => import('../components/Exit/Location2.vue'),
    meta: {
      NavigationFlag: false
    }
  },
  {
    path: "/404",
    component: () => import('../views/errorView.vue'),
    meta: {
      title: 404,
      NavigationFlag: false
    }
  },
  {
    path: "*",//任意路径
    redirect: "/404"//
  }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
// 修改 原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// router.beforeEach((to, from, next) => {
//   console.log(to, from);
//   next()
// })

export default router
