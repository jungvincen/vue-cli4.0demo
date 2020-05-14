import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error)
}

const routes = [
  {
    path: '/',
    redirect: { name: 'HomePage' }
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: ()=> import('../views/home/Home'),
  },
  {
    path: "/Login",
    name: "Login",
    component: ()=> import('../views/login/Login')
  },
  {
    path: '/page1',
    name: 'page1',
    component: ()=> import('../views/page/page1')
  },
  {
    path: '/page2',
    name: 'page2',
    component: ()=> import('../views/page/page2')
  }

];

const router = new VueRouter({
  mode: "history",
  base: "demo",
  routes
});
// router.beforeEach((to, from, next) => {
// 	if (to.name !== 'Login') {
// 		if (!localStorage.token) {
// 			next('/Login')
// 		} else {
// 			next()
// 		}
// 	} else {
// 		next()
// 	}
// })

export default router;
