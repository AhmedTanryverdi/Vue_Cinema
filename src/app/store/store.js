import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			isLoading: false,
			error: false,
			sortField: "",
			products: [],
			activeMovie: {},
		};
	},

	getters: {
		products: (state) => state.products,
		activeMovie: (state) => state.activeMovie,
		getLoading: (state) => state.isLoading,
		error: (state)=>state.error,
		sortField: (state) => state.sortField,
		sortMovies: (state) => {
			if (state.sortField === "name") {
				return state.products.sort((a, b) => {
					if (a.title > b.title) return 1;
					if (a.title === b.title) return 0;
					return -1;
				});
			} else if (state.sortField === "year") {
				return state.products.sort((a, b) => {
					return a.year - b.year;
				});
			}
		},
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

		SORT_MODE(state, payload) {
			state.sortField = payload;
		},

		CLEAR_PRODUCT(state) {
			state.products = [];
		},

		SET_ERROR(state, payload) {
			state.error = payload;
		},
	},

	actions: {
		asyncSetProducts(context, url) {
			context.commit("SET_LOADING", true);
			fetch(url)
				.then((res) => res.json())
				.then(({ data }) => {
					context.commit("SET_PRODUCTS", data);
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
					if (!data) {
						throw true;
					}
					context.commit("SET_ACTIVE_MOVIE", data);
				})
				.catch((err) => context.commit("SET_ERROR", err))
				.finally(() => {
					context.commit("SET_LOADING", false);
				});
		},

		syncSortMode(context, mode) {
			context.commit("SORT_MODE", mode);
		},

		syncClearProducts(context) {
			context.commit("CLEAR_PRODUCT");
		},

		syncSetError(context, payload) {
			context.commit("SET_ERROR", payload);
		},
	},
});

export default store;
