import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('../page/Login.vue'),

    },
    {
        path: '/',
        redirect: '/add',
    },
    {
        path: '/add',
        component: () => import('../page/Add.vue'),
        meta: {
            title: '添加商品'
        }
    },
    {
        path: '/swiper',
        component: () => import('../page/Swiper.vue'),
        meta: {
            title: '轮播图配置'
        }
    },
    {
        path: '/hot',
        component: () => import('../page/Hot.vue'),
        meta: {
            title: '热销商品配置'
        }
    },
    {
        path: '/new',
        component: () => import('../page/New.vue'),
        meta: {
            title: '新品上线配置'
        }
    },
    {
        path: '/recommend',
        component: () => import('../page/Recommend.vue'),
        meta: {
            title: '推荐商品配置'
        }
    },
    {
        path: '/category',
        component: () => import('../page/Category.vue'),
        meta: {
            title: '分类配置'
        }
    },
    {
        path: '/order',
        component: () => import('../page/Order.vue'),
        meta: {
            title: '订单管理配置'
        }
    },
    {
        path: '/goods',
        component: () => import('../page/Goods.vue'),
        meta: {
            title: '商品管理配置'
        }
    },
    {
        path: '/users',
        component: () => import('../page/User.vue'),
        meta: {
            title: '用户管理配置'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;