<template>
	<my-loading v-if="$store.getters.getLoading" />
	<div class="movie" v-else>
		<one-movie
			v-if="!$store.getters.error"
			:poster="movie?.poster"
			:title="movie?.title"
			:year="movie?.year"
			:genres="movie?.genres"
			:directors="movie?.directors"
			:actors="movie?.actors"
			:description="movie?.description"
		/>
		<p class="notFound" v-else>
			К сожалению по вашему запросу ничего не найдено...
		</p>
		<button @click="goBack()">Назад</button>
	</div>
</template>

<script>
import MyLoading from "@/shared/components/loading/MyLoading.vue";
import OneMovie from "./ui/OneMovie.vue";

export default {
	name: "MovePage",

	components: {
		OneMovie,
		MyLoading,
	},

	computed: {
		movie() {
			return this.$store.getters.activeMovie;
		},

		isMovieLoaded() {
			return String(this.movie?.id) === String(this.$route?.params?.id);
		},
	},

	methods: {
		goBack() {
			this.$store.dispatch("syncClearProducts");
			this.$store.dispatch("syncSetError", false);
			this.$router.go(-1);
		},

		isNotFoundId() {
			this.$store.getters.products.forEach((product) => {
				if (product.id === this.$route?.params?.id) {
					return false;
				}
				return true;
			});
		},
	},

	mounted() {
		if (!this.isMovieLoaded) {
			this.$store.dispatch(
				"asyncSetActiveMovie",
				`https://mashroom-movies-api.netlify.app/api/movie/${this.$route?.params?.id}`
			);
		}
	},
};
</script>

<style lang="scss">
.movie {
	width: 1400px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;

	.notFound {
		color: #fff;
		font-size: 28px;
		margin-top: 30px;
		text-align: center;
	}

	button {
		padding: 8px 16px;
		margin-top: 20px;
		width: 150px;
		font-size: 18px;
		border: 1px solid #ff5252fa;
		background-color: #c20c0cfa;
		color: #000;
		font-weight: bold;
		align-self: flex-end;
		&:active {
			transform: scale(0.98);
		}
	}
}
</style>
