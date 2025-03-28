<template>
	<my-loading v-if="$store.getters.getLoading" />
	<div class="movie" v-else>
		<one-movie
			:poster="movie?.poster"
			:title="movie?.title"
			:year="movie?.year"
			:genres="movie?.genres"
			:directors="movie?.directors"
			:actors="movie?.actors"
			:description="movie?.description"
		/>
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
			this.$router.go(-1);
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

	button {
		padding: 8px 16px;
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
