<template>
	<my-loading v-if="$store.getters.getLoading" />
	<one-movie v-else
		:poster="movie?.poster"
		:title="movie?.title"
		:year="movie?.year"
		:genres="movie?.genres"
		:directors="movie?.directors"
		:actors="movie?.actors"
		:description="movie?.description"
	/>
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

<style lang="scss"></style>
