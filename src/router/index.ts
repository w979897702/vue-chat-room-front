import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { getCookie } from '../utils/cookies';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ChatRoom from '../views/ChatRoom.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatRoom,
  },
  {
    // 其他路径重定向到login界面
    path: '/:catchAll(.*)',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.name != 'Login' && to.name != 'Register' && !getCookie('currentUser')) next('/login');
  next();
});
export default router;
