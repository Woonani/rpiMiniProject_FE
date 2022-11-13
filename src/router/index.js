import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		beforeEnter: (to, from, next) => {
			console.log('to: ', to, 'from: ', from)
			if (localStorage.getItem('token')) {
				next()
			} else {
				next('/signin')
			}
		},
		component: HomeView,
	},
	{
		path: '/signin',
		name: 'signin',
		beforeEnter: (to, from, next) => {
			console.log('to: ', to, 'from: ', from)
			if (localStorage.getItem('token')) {
				next('/')
			} else {
				next()
			}
		},
		component: () => import('../views/Auth/SigninView.vue'),
	},
	{
		path: '/signup',
		name: 'signup',
		beforeEnter: (to, from, next) => {
			console.log('to: ', to, 'from: ', from)
			if (localStorage.getItem('token')) {
				next('/')
			} else {
				next()
			}
		},
		component: () => import('../views/Auth/SignupView.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
