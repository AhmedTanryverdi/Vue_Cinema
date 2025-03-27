import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			isLoading: false,
			products: [],
		};
	},

	getters: {
		products: (state) => state.products,
	},

	mutations: {
		SET_PRODUCTS(state, payload) {
			state.products = payload;
		},

		SET_LOADING(state, payload) {
			state.isLoading = payload;
		},
	},

	actions: {
		asyncSetProducts(context) {
			context.commit("SET_LOADING", true);
			fetch("https://mashroom-movies-api.netlify.app/api/movies")
				.then((res) => res.json())
				.then((data) => {
					context.commit("SET_PRODUCTS", data.data);
				})
				.finally(() => {
					context.commit("SET_LOADING", false);
				});
		},
	},
});

export default store;
