<template>
	<header class="header">
		<h2 class="title">Фильмы</h2>
		<div class="selects-sort">
			<label for="by-name">
				<input
					type="checkbox"
					@click="setChekedSort('name')"
					v-model="sortByName"
					class="input"
				/>
				<span>Отсортировать по названию</span>
			</label>
			<label for="by-year">
				<input
					type="checkbox"
					@click="setChekedSort('year')"
					v-model="sortByYear"
					name="checkbox"
					class="input"
				/>
				<span>Отсортировать по году</span>
			</label>
		</div>
	</header>
</template>

<script>
export default {
	name: "HomeHeader",

	computed: {
		sortByName() {
			return this.$store.getters.sortField === "name";
		},
		sortByYear() {
			return this.$store.getters.sortField === "year";
		},
	},

	methods: {
		setChekedSort(mode) {
			this.$store.dispatch("syncSortMode", mode);
			this.$store.getters.sortMovies;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/shared/scss/styles.scss";

.header {
	width: 1400px;
	height: 124px;
	margin: 0 auto;
	border-bottom: 1px solid $header-border-bottom-color;
	@include flex(column, center, flex-start);

	.title {
		width: 130px;
		height: 32px;
		@include font(500, 32px, 32px, 0%);
		color: $primary-txt-color;
	}

	.selects-sort {
		margin-top: 16px;
		@include flex-center;
		column-gap: 32px;

		label {
			@include flex-center;
			column-gap: 8px;
		}

		label .input {
			width: 15px;
			height: 15px;
			accent-color: $header-bg-color;
		}

		label span {
			@include font(400, 16px, 16px, 0%);
			color: $secondary-txt-color;
		}
	}
}
</style>
