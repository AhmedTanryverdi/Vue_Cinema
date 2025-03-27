import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			isLoading: false,
			products: [],
			activeMovie: {},
		};
	},

	getters: {
		products: (state) => state.products,
		activeMovie: (state) => state.activeMovie,
		getLoading: (state) => state.isLoading,
	},

	mutations: {
		SET_PRODUCTS(state, payload) {
			state.products = payload;
		},

		SET_LOADING(state, payload) {
			state.isLoading = payload;
		},

		SET_ACTIVE_MOVIE(state, payload) {
			state.activeMovie = payload;
		},
	},

	actions: {
		asyncSetProducts(context, url) {
			context.commit("SET_LOADING", true);
			fetch(url)
				.then((res) => res.json())
				.then(({ data }) => {
					context.commit("SET_PRODUCTS", data);
					console.log("finish");
				})
				.finally(() => {
					context.commit("SET_LOADING", false);
				});
		},

		syncSetActiveMovie(context, payload) {
			context.commit("SET_ACTIVE_MOVIE", payload);
		},

		asyncSetActiveMovie(context, url) {
			context.commit("SET_LOADING", true);

			fetch(url)
				.then((res) => res.json())
				.then(({ data }) => {
					context.commit("SET_ACTIVE_MOVIE", data);
				})
				.finally(() => {
					context.commit("SET_LOADING", false);
				});
		},
	},
});

export default store;
