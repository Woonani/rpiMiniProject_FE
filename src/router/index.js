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
	{
		path: '/codeinput',
		name: 'codeInput',
		component: () => import('../views/codeInput.vue'),
	},
	{
		path: '/ranking',
		name: 'ranking',
		component: () => import('../views/ranking.vue'),
	},
	{
		path: '/photoalbum',
		name: 'photoAlbum',
		component: () => import('../views/photoAlbum.vue'),
	},
	{
		path: '*',
		name: 'NotFound',
		component: () => import('../views/NotFoundPage.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
