import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/signin',
		name: 'signin',
		component: () => import('../views/Auth/SigninView.vue'),
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('../views/Auth/SignupView.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
