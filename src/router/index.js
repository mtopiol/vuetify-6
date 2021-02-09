import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ '@/views/About.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/Login.vue')
		},
		{
			path: '/users',
			name: 'users',
			component: () => import('@/views/Users.vue')
		},
		{
			path: '/orders',
			name: 'orders',
			component: () => import('@/views/Orders.vue')
		},
		{
			path: '/tracking',
			name: 'tracking',
			component: () => import('@/views/Tracking.vue')
		},
	]
})
