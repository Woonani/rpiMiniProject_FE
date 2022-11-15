import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {},
	state: {
		user: null,
	},
	getters: {
		user: state => {
			return state.user
		},
	},
	mutations: {
		setuser(state, data) {
			state.user = data
		},
	}, //치면 오류남
})
