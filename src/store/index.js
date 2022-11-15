import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {},
	state: {
		User: {
			id: 0,
		},
	},
	getters: {
		User: state => state.User,
	},
	mutations: {
		setUser(state, data) {
			state.User = data
		},
	}, //치면 오류남
})
