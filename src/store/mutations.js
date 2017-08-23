import * as types from './mutation-types'

const mutations = {
	[types.SET_CATEGORYID](state, id) {
		state.categoryId = id
	},
	[types.SET_PREPRODUCT](state, preproduct) {
		state.preproduct = preproduct
	},
}

export default mutations