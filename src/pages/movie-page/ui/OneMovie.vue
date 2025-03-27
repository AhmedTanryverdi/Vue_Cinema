<template>
	<div class="card">
		<div class="img">
			<img :src="poster" alt="image" />
		</div>
		<div class="body">
			<h3 class="title">
				{{ title }}
			</h3>
			<div class="genres">
				<span>{{ year }}, </span>
				<ul>
					<li>{{ genres?.join(", ") }}</li>
				</ul>
			</div>

			<div class="directors">
				<span>режиссёр: </span>
				<ul>
					<li>
						{{ directors?.join(", ") }}
					</li>
				</ul>
			</div>

			<div class="actors">
				<span>Актёры: </span>
				<ul>
					<li v-for="(actor, index) in actors" :key="index">
						{{ actor }}
					</li>
				</ul>
			</div>

			<div class="description">
				<p>{{ description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "OneMovie",

	props: [
		"id",
		"poster",
		"title",
		"year",
		"genres",
		"directors",
		"actors",
		"description",
	],
};
</script>

<style lang="scss" scoped>
@import "../../../shared/scss/styles.scss";
.card {
	width: 1400px;
	margin: 20px auto;
	display: flex;
	column-gap: 24px;
	background: #4d4747;
	.body {
        padding-top: 15px;
		@include flex(column, flex-start, flex-start);
		row-gap: 20px;
		flex: 1;
		.title {
			@include font(700, 36px, 36px, 0);
			color: $primary-txt-color;
			margin-bottom: 12px;
		}

		.genres,
		.directors,
		.actors {
			display: flex;
			@include font(700, 24px, 24px, 0);
			color: #988f8f;

			ul {
				margin-left: 12px;
				li:not(:last-child)::after {
					content: ", ";
					margin-right: 2px;
				}
			}
		}

		.actors {
			ul {
				display: flex;
				flex-wrap: wrap;
				column-gap: 12px;
				color: #e5e5e5;
			}
		}

		.description {
			@include font(700, 24px, 24px, 0);
			color: #e5e5e5;
		}
	}
}
</style>
