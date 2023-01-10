import Vue from 'vue'
import VueRouter from 'vue-router'
// fix err Redirected when going from "/login" to "/home" via a navigation guard
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue')
  }
]
const errorRoute = {
  path: '/:pathMatch(.*)',
  component: () => import('@/views/error/404.vue')
}
const asyncRoutes = {
  path: '/',
  component: () => import('@/layout/index.vue'),
  redirect: '/home',
  children: [
    {
      path: '/home',
      name: 'home',
      meta: {
        title: 'sdf',
        breadcrumb: []
      },
      component: () => import('@/views/page1/index.vue'),
    },
    {
      path: '/home2',
      name: 'home2',
      meta: {
        title: 'sdf',
        breadcrumb: []
      },
      component: () => import('@/views/page2/index.vue'),
    }
  ]
}
const whiteList = ['/login']


export const router = new VueRouter({
  routes: constantRoutes,
})
// 获取扁平化路由，将多级路由转换成一级路由
export const getKeepAliveRoutes = (rs, breadcrumb) => {
  const routerList = []

  rs.forEach((item) => {
    if (item.meta.title) {
      breadcrumb.push(item.meta.title)
    }

    if (item.children && item.children.length > 0) {
      routerList.push(...getKeepAliveRoutes(item.children, breadcrumb))
    } else {
      item.meta.breadcrumb.push(...breadcrumb)
      routerList.push(item)
    }

    breadcrumb.pop()
  })
  return routerList
}

// 路由加载前
router.beforeEach(async (to, from, next) => {
  const store = router.app.$options.store
  // token存在的情况
  if (store.state.user.token) {
    if (to.path === '/login') {
      next('/home')
    } else {
      // 用户信息不存在，则重新拉取用户等信息
      if (!store.state.user.user.id) {
        const menuRoutes = [
          {
            path: '/home3',
            name: 'home3',
            meta: {
              title: 'sdf',
              icon: "",
              breadcrumb: []
            },
            component: () => import('@/views/page1/index.vue'),
          },
          {
            path: '/home4',
            name: 'home4',
            meta: {
              title: 'sdf',
              icon: "",
              breadcrumb: []
            },
            component: () => import('@/views/page2/index.vue'),
          }
        ]
        store.state.user.user.id = "2"
        // 根据后端菜单路由，生成KeepAlive路由
        const keepAliveRoutes = getKeepAliveRoutes(menuRoutes, [])
        // 添加菜单路由
        asyncRoutes.children?.push(...keepAliveRoutes)
        router.addRoute(asyncRoutes)

        // 错误路由
        router.addRoute(errorRoute)
        // 保存路由数据
        constantRoutes.concat(asyncRoutes)
        store.state.app.menuList = keepAliveRoutes
        console.log(store.state.app.menuList);
        next({ ...to, replace: true })
      } else {
        next()
      }
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})







