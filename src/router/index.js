import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

/* layout */
import Layout from '../views/layout/Layout';

const Login = _import('login/login');

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录'
    },
    hidden: true,
    component: resolve => {
      require(['../views/login/login.vue'], resolve);
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/access',
    name: 'access',
    hidden: true,
    children: [{path: 'access', title: 'access', name: 'access', component: _import('access/access')}]
  }
  // {
  //   path: '/',
  //   component: Layout,
  //   name: 'Layout',
  // }
];

//默认控件
const defaultComponent = Layout;
//路由数据
export const otherRouterMap = initRouter(require('./router.json'));

/**
 * 初始化路由
 * @param router 路由文件，是一个数组
 */
function initRouter(router) {
  for (let i = 0; i < router.length; i++) {
    let route = router[i];
    //设置一级路由的控件为全局定义的默认控件
    route.component = defaultComponent;
    //设置子路由
    initChildrenRouter(route.children)
  }
  return router;
}

/**
 * 初始化子路由
 * @param router 子路由数组
 */
function initChildrenRouter(router) {
  for (let i = 0; i < router.length; i++) {
    let route = router[i];
    //初始化子路由的控件
    route.component = _import(route.component);
  }
}

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: [
    ...constantRouterMap,
    ...otherRouterMap]
})